import { Add, Clear, Delete} from "@mui/icons-material"
import { Button, Container, FormControl, Input, InputLabel, Toolbar } from "@mui/material"
import { useState } from "react"
import '../Todolist/todo.css'

const Todo = () => {
    const main = {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        fontSize: "50px",
        position: "absoulte",
        top: "-50px",
        left: "210px"
    }
    const add = {
        fontSize: "40px"
    }
    const h1 = {
        marginLeft: "530px",
        color: "red",
        fontSize: "80px",
        boxShadow: "0 0 10px 0 #000",
        width: "400px",
        textAlign: "center",
        marginTop: "30px",
        borderRadius: "30px"
    }

    // const app={
    //     textAlign:"center",
    //     marginLeft:"500px",
    //     position: "absolute",
    //     display: "flex",
    //     justifyContent: "cente",
    //     top:"420px",
    //     left:"70px",
    //     margin:"auto 0",
    //     width:"200px",
    //     boxShadow:"0 0 10px 0 #000",
    //     // textAlign:"center",
    //     height:"auto",
    //     overFlow:"hidden",

    // }
    const app = {
        display: "flex",
        justifyContent: "center",
        boxShadow: "0 0 10px 0 #000",
        width: "50%",
        // height:"200px",
        marginLeft: "250px"
    }
    // const p={
    //     marginLeft:"20px",
    //     width:"40px",
    //     overFlow:"hidden",

    // }

    // usestate are use

    const [value, setvalue] = useState("")
    const [show, setShow] = useState([])

    const click = () => {
        if (!value) {
            alert("Enter a valid value")
        } else {
            const input={
                id:new Date().getTime().toString(),
                name:value
            }
            setShow([...show, input])
            setvalue(" ")
        }
    }

    const deleteItem=(index)=>{
        const app=show.filter((value)=>{
            return value.id !== index;
        })
        setShow(app)
    }

    const removeAll=()=>{
        setShow([])
    }

   

    return (
        <>
            {/* <ToggleOff onclick={Toggle} /> */}
            <h1 style={h1}>Todo list </h1>
            <Container className="container">
                <Toolbar variant="dense" className="toolbar">
                    <FormControl variant="standard" color="error">

                        <InputLabel>Enter your value</InputLabel>
                        <Input placeholder="Enter your value" className="input" required value={value} onChange={(e) => setvalue(e.target.value)} />
                        <Button variant="contained" style={main} disableRipple disableFocusRipple onClick={click}>
                            <Add style={add} />
                        </Button>
                    </FormControl>

                </Toolbar>

                {

                    show.map((value) => {// 
                        return (
                            <>
                                <Toolbar style={app}>
                                    <p >{value.name}</p>
                                    <Delete onClick={()=>deleteItem(value.id)}  />
                                </Toolbar>
                            </>

                        )
                    })

                }



                <Button variant="contained" color="warning" onClick={removeAll}>Remove All <Clear/> </Button>

            </Container>
        </>
    )
}

export default Todo