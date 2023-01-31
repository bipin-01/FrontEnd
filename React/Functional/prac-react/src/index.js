import react from 'react';
import ReactDom from 'react-dom/client';



const Greeting = () => {

    return <h2 className="someclass">
        Hello from the other side
    </h2>
}

export default Greeting;

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<Greeting />)
