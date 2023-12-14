// import { createContext, useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as zod from "zod";
// import { differenceInSeconds } from "date-fns";

// /**
//  * [ICON]
//  */
// import { HandPalm, Play } from "phosphor-react";

// /**
//  * [STYLES]
//  */
// import {
//   CountDownContainer,
//   FormContainer,
//   HomeContainer,
//   MinutesAmountInput,
//   Separetor,
//   StartCountdownButton,
//   TaskInput,
//   StopCountdownButton,
// } from "./styles";

// /**
//  * [COMPONENTES]
//  */
// import { NewCycleForm } from "./components/NewCycleForm";
// import { Countdown } from "./components/Countdown";

// const newCycleFormValidationSchema = zod.object({
//   task: zod.string().min(1, "Informe a tarefa"),
//   minutesamount: zod
//     .number()
//     .min(1, "O intervalo precisa ser de no minimo de 5 minutos")
//     .max(60, "O intervalo precisa ser de no máximo de 60 minutos"),
// });

// type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

// interface Cycle {
//   id: string;
//   task: string;
//   minutesAmount: number;
//   startDate: Date;
//   interruptDate?: Date;
//   finishedDate?: Date;
// }

// export function Home() {
//   /**
//    * Abstraindo funcitos do useForme para registra e atualizar e resetar o formulário
//    */
//   const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
//     resolver: zodResolver(newCycleFormValidationSchema),
//     defaultValues: {
//       task: "",
//       minutesamount: 0,
//     },
//   });
//   const task = watch("task");
//   const isSubmitDisabled = !task;

//   /**
//    * States responsável por receber os dados do formulario e
//    * verificar qual atividade esta ativa.
//    */
//   const [cycles, setCycles] = useState<Cycle[]>([]);
//   const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

//   /**
//    * Armazena o tanto de segundos que já passou deis que o
//    * ciclo esta ativo
//    */
//   const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

//   /**
//    * Percorre todos os Cycles ativos e obtem o id
//    */
//   const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

//   /**
//    * Converte numeros de minutos em segundos
//    */
//   const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

//   /**
//    * Configuração para converte os minutos do time em strings
//    * que vão receber decremento para ir contando
//    * conto tempo já foi passado.
//    */
//   const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
//   const minutesAmount = Math.floor(currentSeconds / 60);
//   const secondsAmount = currentSeconds % 60;
//   const minutes = String(minutesAmount).padStart(2, "0");
//   const seconds = String(secondsAmount).padStart(2, "0");

//   const CyclesContestType {
//     activeCycle: Cycle |
//   }

//   const CyclesContext = createContext({})

//   useEffect(() => {
//     let interval: number;
//     if (activeCycle) {
//       interval = setInterval(() => {
//         const secondsDifference = differenceInSeconds(
//           new Date(),
//           activeCycle.startDate
//         );

//         if (secondsDifference >= totalSeconds) {
//           setCycles((state) =>
//             state.map((cycle) => {
//               if (cycle.id === activeCycleId) {
//                 return { ...cycle, finishedDate: new Date() };
//               } else {
//                 return cycle;
//               }
//             })
//           );
//           setAmountSecondsPassed(totalSeconds);
//           clearInterval(interval);
//         } else {
//           setAmountSecondsPassed(secondsDifference);
//         }
//       }, 1000);
//     }
//     return () => {
//       clearInterval(interval);
//     };
//   }, [activeCycle, totalSeconds, activeCycleId]);

//   useEffect(() => {
//     if (activeCycle) {
//       document.title = `${minutes}:${seconds}`;
//     }
//   }, [minutes, seconds, activeCycle]);

//   /**
//    * Cria a nova task a partir dos dados enviados do formulário
//    * @param data
//    */
//   function handleCreateNewCycle(data: NewCycleFormData) {
//     const id = String(new Date().getTime());

//     const newCycle: Cycle = {
//       id: id,
//       task: data.task,
//       minutesAmount: data.minutesamount,
//       startDate: new Date(),
//     };

//     setCycles((state) => [...state, newCycle]);
//     setActiveCycleId(id);
//     setAmountSecondsPassed(0);
//     reset();
//   }

//   /**
//    * Interrompe o ciclo da contagem regresiva do contador
//    * set o cycle ativo de volta para nao ter mas nenhum ativo
//    * e vai anotar se o cyclo foi interrompido ou não
//    */
//   function handleInterruptCycle() {
//     setActiveCycleId(null);

//     setCycles((state) =>
//       state.map((cycle) => {
//         if (cycle.id === activeCycleId) {
//           return { ...cycle, interruptDate: new Date() };
//         } else {
//           return cycle;
//         }
//       })
//     );
//   }

//   return (
//     <HomeContainer>
//       <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
//         <NewCycleForm />
//         <Countdown />
//         {activeCycle ? (
//           <>
//             <StopCountdownButton type="button" onClick={handleInterruptCycle}>
//               <HandPalm size={24} />
//               Interromper
//             </StopCountdownButton>
//           </>
//         ) : (
//           <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
//             <Play size={24} />
//             Começar
//           </StartCountdownButton>
//         )}
//       </form>
//     </HomeContainer>
//   );
// }

import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { useContext } from "react";
import { CyclesContext } from "../../context/CyclesContext";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo 5 minutos.")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch } = newCycleForm;

  const task = watch("task");
  const isSubmitDisable = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisable} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
