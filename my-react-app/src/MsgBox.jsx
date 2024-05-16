export default function MsgBox({userName,textColor}){

    let styles = {color:textColor};

    return(
        <h1 style={styles} >Hello ,{userName}</h1>
    )
}