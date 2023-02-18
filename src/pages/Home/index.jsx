import Card from "../../components/Card";

const Home = () => {
    return (
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
                <Card 
                imgUrl="./assets/searching.png" 
                title="Searching" 
                text="In computer science, a search algorithm is an algorithm designed to solve a search problem. Search algorithms work to retrieve information stored within particular data structure, or calculated in the search space of a problem domain, with either discrete or continuous values." 
                link="/searching/sequential" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
                <Card 
                imgUrl="./assets/sorting.png" 
                title="Sorting" 
                text="Sorting refers to arranging data in a particular format. Sorting algorithm specifies the way to arrange data in a particular order. Most common orders are in numerical or lexicographical order." 
                link="/sorting/bubble" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
                <Card 
                    imgUrl="./assets/stack.png" 
                    title="Stack" 
                    text="The stack data structure is a linear data structure that accompanies a principle known as LIFO (Last In First Out) or FILO (First In Last Out). Real-life examples of a stack are a deck of cards, piles of books, piles of money, and many more." 
                    link="/stack" />
            </div>
        </div>
    )
}

export default Home;