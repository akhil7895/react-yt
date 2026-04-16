import RightCardContent from "./RightCardContent";

function RightCard(props){
    console.log(props.users);
    
    return(
        <>
        <div className="flex flex-row gap-4 h-full w-full">
            {
                props.users.map((user,ind) => {
                    return(
                        <RightCardContent key={ind} index = {ind} tag = {user.tag} img = {user.img} />
                    )
                })
            }




        </div>


        </>
    )
}


export default RightCard;