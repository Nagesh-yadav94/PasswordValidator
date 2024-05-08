// Write your code here

import {useState} from 'react'

import {
  MainContainer,
  InnerContainer,
  SubInnerContianer,
  Title,
  Description,
  Password,
  ErrMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, newPassword] = useState('')
  const [showErr, toggleErr] = useState(true)

  const validatePassword = event => {
    newPassword(event.target.value)
    if (event.target.value.length >= 8) {
      toggleErr(false)
    } else {
      toggleErr(true)
    }
  }

  return (
    <MainContainer>
      <InnerContainer>
        <SubInnerContianer>
          <Title>Password Validator</Title>
          <Description>
            Check how strong and secure is your password
          </Description>
        </SubInnerContianer>
        <SubInnerContianer>
          <Password
            type="password"
            name="password"
            onChange={validatePassword}
            value={password}
          />
          {showErr && (
            <ErrMsg>Your password must be at least 8 characters</ErrMsg>
          )}
        </SubInnerContianer>
      </InnerContainer>
    </MainContainer>
  )
}

export default PasswordValidator
