import React from 'react'
import styled from 'styled-components'

export default (Wrapped, propertyName) => {
  const PassClassAsPropName = ({ className, ...props }) => {
    props[propertyName] = className
    return <Wrapped {...props} />
  }

  return styled(PassClassAsPropName)
}
