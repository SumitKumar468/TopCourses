
function Filter(props){
    let filterData = props.filterData;
    let catagory = props.catagory;
    let setCatagory = props.setCatagory;

    function filterHandler(title){
        setCatagory(title);
    }

    return (
        <div className="filter-btn">
            {
                filterData.map( (data) => {
                    return <button className="btn" 
                    key={data.id}
                    onClick={ () => filterHandler(data.title)}>
                    {data.title}</button>
                })
            }
        </div>
    );
}

export default Filter;

// filterData.map( (data) => (
//     <button>{data.title}</button>
// ))