/**
 * [STYLES]
 */
import * as S from './style'

export function Countdown() {
  return (
    <S.CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <S.Separetor>:</S.Separetor>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </S.CountDownContainer>
  )
}
