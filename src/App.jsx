import { useState } from 'react'
import { Button } from './components/button/button'
import './App.css'



function App() {
  const [result, setResult,] = useState(0)
  const [currentValue, setCurrentValue] = useState(null)
  const [simbol, setSimbol] = useState(null)
  const [newResult, setNewResult] = useState(false)


  const handleNegative = () => {
    setResult(oldState => {
      if (result < 0) {
        return + oldState
      }
      else {
        return - oldState
      }
    })
  }

  const handlePercentage = () => {
    setResult(oldState => oldState / 100)
  }

  const handleSetInputUser = (e) => {
    setResult(oldState => {
      if (oldState === 0 || newResult) {
        setNewResult(false)
        return e.target.value
      } else {
        if (oldState.length < 9) {
          return oldState + e.target.value
        }
        return oldState
      }
    })
  }

  const handleSetSimbolUser = (e) => {
    let simbolUser = e.target.value
    if (simbolUser === 'X') {
      simbolUser = '*'
    }

    setNewResult(true)
    setSimbol(simbolUser)

    if (currentValue) {
      const calculationValue = (calculation(currentValue, simbol, result))
      setResult(calculationValue)
      setCurrentValue(calculationValue)

    } else {
      setCurrentValue(result)
    }
  }
  const calculation = (currentValue, simbol, value) => {
    return eval(Number(currentValue) + simbol + Number(value))
  }

  const handleResult = () => {
    setResult(calculation(currentValue, simbol, result))
  }

  const handleReset = () => {
    setResult(0)
    setCurrentValue(null)
    setSimbol(null)
    setNewResult(false)
  }
  const button = [
    {
      value: "AC",
      onClick: handleReset,
      type: 'secondary'
    },
    {
      value: "+/-",
      onClick: handleNegative,
      type: 'secondary'
    },
    {
      value: "%",
      onClick: handlePercentage,
      type: 'secondary'
    },
    {
      value: "/",
      onClick: handleSetSimbolUser,
      type: ''
    },
    {
      value: "7",
      onClick: handleSetInputUser,
      type: 'primary'
    },
    {
      value: "8",
      onClick: handleSetInputUser,
      type: 'primary'
    },
    {
      value: "9",
      onClick: handleSetInputUser,
      type: 'primary'
    },
    {
      value: "X",
      onClick: handleSetSimbolUser,
      type: ''
    },
    {
      value: "4",
      onClick: handleSetInputUser,
      type: 'primary'
    },
    {
      value: "5",
      onClick: handleSetInputUser,
      type: 'primary'
    },
    {
      value: "6",
      onClick: handleSetInputUser,
      type: 'primary'
    },
    {
      value: "-",
      onClick: handleSetSimbolUser,
      type: ''
    },
    {
      value: "1",
      onClick: handleSetInputUser,
      type: 'primary'
    },
    {
      value: "2",
      onClick: handleSetInputUser,
      type: 'primary'
    },
    {
      value: "3",
      onClick: handleSetInputUser,
      type: 'primary'
    },
    {
      value: "+",
      onClick: handleSetSimbolUser,
      type: ''
    },
    {
      value: "0",
      onClick: handleSetInputUser,
      type: 'lg'
    },
    {
      value: ",",
      onClick: handleSetInputUser,
      type: 'primary'
    },
    {
      value: "=",
      onClick: handleResult,
      type: ''
    }

  ]

  return (
    <div className='container' >
      <div className='result'>
        <p>{result}</p>
      </div>
      <div className="keyboard">
        {
          button.map((button) => {
            return <Button value={button.value} onClick={button.onClick} type={button.type} SimbolActive={simbol} key={button.value} />
          })
        }
      </div>
    </div >

  )
}

export default App