
export default function CPButton(props : any) {
    const {onClick,label,id} = props;
    return (
    <CPButton id={id} onClick={onClick}>{label}</CPButton>
    )}
  
  