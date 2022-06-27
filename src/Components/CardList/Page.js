import { Pagination } from "react-bootstrap";

const Page = props => {

    const clicked = (e) => {
        props.pageClicked(Number(e.target.id)+1)
    }

    let items = [];
    for (let i = 0; i < props.numOfPages; i++) {
        items.push(
            <Pagination.Item key={i} id={i} active={i+1 === props.activePage} onClick={clicked}>
                {i+1}
            </Pagination.Item>
        );
    }
    
    return(
        <Pagination>
            {items}
        </Pagination>
    )
}

export default Page;