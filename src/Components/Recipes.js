export default function Recipes({ recipes }) {
 const display = recipes.map((p, i) => {
     return <li key={i}>{p}</li>
 })
 return (
     <div>
         <div className="packages">
             <div className="packagesHeader">
                 <h1>Our Recipes</h1>
                 <ul>
                     {display}
                 </ul>
             </div>
             
         </div>
     </div>
 )
}