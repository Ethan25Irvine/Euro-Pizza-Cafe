import react from 'react';

function ItemDescription(props) {
    // console.log(props.item.food);
    return (



        props.item.food.map(data2 => {

            const split = data2.description.split("\n");

            return (
                <div className="row mx-auto border-bottom border-dark mt-3" id="border-width">
                    <h5 className="col-10 col-sm-10 col-md-11 col-lg-11 text-red" id="veggie" >{data2.name}<span style={{color: "green"}}>{data2.veggie}</span></h5>
                    <h5 className="col-1 col-sm-1 col-md-1 col-lg-1  text-dark text-end">{data2.price}</h5>
                    {data2.description === "" ? (null) : (split[0] === "" ? (<p className="col-10"><strong>{split[1]}</strong></p>) : (<p className="col-10">{split[0]}<br /><strong>{split[1]}</strong></p>))}

                </div>
            )
        })
    )



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
                        <h3 className=" mx-auto"><strong>{Header[0]}</strong></h3><br /><h6>{Header[1]}</h6>
                    </div>
                    <ItemDescription item={data} />

                </div>
            )
        })
    )

}

export default MenuItem;