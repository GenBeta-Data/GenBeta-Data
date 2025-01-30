import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import BlogList from './components/Blog/BlogList';
import BlogPost from './components/Blog/BlogPost';
import BetaPage from './components/Game/BetaPage';
import GameDetails from './components/Game/GameDetails';
import Leaderboard from './components/Leaderboard/Leaderboard';
import FAQ from './components/FAQ/FAQ';
import AboutUs from './components/AboutUs/AboutUs';
import LanguageSwitcher from './components/LanguageSupport/LanguageSwitcher';

function App() {
    return (
        <Router>
            <div>
                <LanguageSwitcher />
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/blogs" component={BlogList} />
                    <Route path="/blog/:id" component={BlogPost} />
                    <Route path="/beta" component={BetaPage} />
                    <Route path="/game/:id" component={GameDetails} />
                    <Route path="/leaderboard" component={Leaderboard} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/" exact component={BlogList} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;