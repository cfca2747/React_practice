export default function TabButton({children, onSelect}) {
//Opción 1
//  function handleClick() {
//     console.log('Hello World');
//  } 


return (
    <li>
        {/* <button onClick={handleClick}>{children}</button> */ /*Opción 1*/
        <button onClick={onSelect}>{children}</button>
        }
    </li>
)

}
