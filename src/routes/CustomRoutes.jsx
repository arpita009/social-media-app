import {Routes, Route} from 'react-router-dom';
import UserDetails from "../components/UserDetails/UserDetails";
import SocialMedia from "../components/SocialApp";

export default function CustomRoutes() {
    return(
        <Routes>
            <Route path='/' element={<SocialMedia/>} />
            <Route path='/user/:id'  element={<UserDetails/>} />
        </Routes>
    )
}