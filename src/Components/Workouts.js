export default function Workouts({ workouts }) {
 const display = workouts.map((p, i) => {
     return <li key={i}>{p}</li>
 })
 return (
     <div>
         <div className="packages">
             <div className="packagesHeader">
                 <h1>Our Workouts</h1>
                 <ul>
                     {display}
                 </ul>
             </div>
             
         </div>
     </div>
 )
}