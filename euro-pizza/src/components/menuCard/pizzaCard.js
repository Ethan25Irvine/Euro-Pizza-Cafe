import react from 'react';

function PizzaDescription(props) {
    // console.log(props.item.food);
    return (
        


                props.item.food.map(data2 =>{
                    
                    const split = data2.description.split("\n");
                   
                    return(
 <div className="row mx-auto border-bottom border-dark mt-3" id="border-width">
                    {/* <h5 className="col-10 col-sm-10 col-md-11 col-lg-11 text-red">{data2.name}</h5>
                    <h5 className="col-1 col-sm-1 col-md-1 col-lg-1  text-red text-end">{data2.price}</h5> */}
                    <h5 className="col-8 col-sm-8 col-md-10 col-lg-10 text-red">{data2.name}</h5>
                    <h5 className="col-2 col-sm-2 col-md-1 col-lg-1  text-red text-end">{data2.price14}</h5>
                    <h5 className="col-2 col-sm-2 col-md-1 col-lg-1  text-red text-end">{data2.price16}</h5>
                    {data2.description === "" ? (null):(split[0]==="" ? (<p className="col-10 fst-italic fw-bold">{split[1]}</p>):(<p className="col-10">{split[0]}<br/><span className="fst-italic fw-bold">{split[1]}</span></p>))}
                    
                </div>
                    )
                })
            )

        
    
}

function PizzaItem(props) {
    // console.log(props);
    const Menu = props.menu.PizzaMenu;
    return (
        Menu.map(data => {
            const Header = data.header.split('\n');
            // console.log(data);
            return (

                <div>
                    <div id="border-width" className="text-center mt-5 row mx-auto border-bottom border-red">
                        <h3  className=" mx-auto"><strong>{Header[0]}</strong></h3><br/><h6>{Header[1]}</h6>
                    </div>
                    <PizzaDescription item={data} />
                    
                </div>
            )
        })
    )

}

export default PizzaItem;