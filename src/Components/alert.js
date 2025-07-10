import React from 'react'

export default function alert(props) {
    const capitilize= (word)=>{
const lower = word.toLowerCase();
return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
      props.alert &&  <div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 {capitilize(props.alert.type)}: {props.alert.msg}
 
</div>
    )
}