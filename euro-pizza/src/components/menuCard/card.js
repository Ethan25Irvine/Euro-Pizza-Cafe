import react from 'react';

function ItemDescription(props) {
    // console.log(props.item.food);
    return (
        // <h1>Test</h1>
        // props.item.map(data => {
        //     console.log(data);
        //     return (


                props.item.food.map(data2 =>{
                    
                    const split = data2.description.split("\n");
                    // console.log(split[1]);
                    
                    // function text (){

                    //     for (let i = 1; i <= split.length; i++){
                    //         if ( i === split.length){
                    //             return(
                    //                 <p className="col-10">{split[0]} <br/> <span>{split[1]}</span></p>
                    //             )

                    //         }
                    //     }

                        // if (split.length == 2){
                        //     return(
                        //        <p className="col-10">{split[0]} <br/> <span>{split[1]}</span></p>
                               
                        //     )
                        // }
                        
                    // }
                    return(
 <div className="row mx-auto border-bottom border-dark mt-3" id="border-width">
                    <h5 className="col-10 col-sm-10 col-md-11 col-lg-11 text-red">{data2.name}</h5>
                    <h5 className="col-1 col-sm-1 col-md-1 col-lg-1  text-red text-end">{data2.price}</h5>
                    {data2.description === "" ? (null):(split[0]==="" ? (<p className="col-10"><strong>{split[1]}</strong></p>):(<p className="col-10">{split[0]}<br/><strong>{split[1]}</strong></p>))}
                    {/* <p className="col-10">{data2.description.split('\n')}</p> */}
                    {/* (data2.description.split('\n').map(str =><p className="col-10">{str}</p>)) */}
                </div>
                    )
                })
            )

        // })
    
}

function MenuItem(props) {
    // console.log(props);
    const Menu = props.menu.Menu;
    return (
        Menu.map(data => {
            const Header = data.header.split('\n');
            // console.log(data);
            return (

                <div>
                    <div id="border-width" className="text-center mt-5 row mx-auto border-bottom border-red">
                        <h3  className=" mx-auto"><strong>{Header[0]}</strong></h3><br/><h5>{Header[1]}</h5>
                    </div>
                    <ItemDescription item={data} />
                    {/* <div className="row mx-auto border-bottom border-red" id="border-width">
                <h5 className="col-10 col-sm-10 col-md-11 col-lg-11 text-red">{data.name}</h5>
                <h5 className="col-1 col-sm-1 col-md-1 col-lg-1  text-red">6.5</h5>
                <p className="col-10">Served w/ homemade potatoes & choice of toast<br/>
                Love eggs? Ask for a 3rd egg free</p>
            </div> */}
                </div>
            )
        })
    )

}

export default MenuItem;