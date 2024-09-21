import "./community.scss"
import WidgetBot from '@widgetbot/react-embed'

import { Helmet } from "react-helmet";
import GoToTop from '../../top';

function Community() {


    return (
        <div className="Community" >
            <br />

            <center><h1 className="prob-desc welcome-com">Welcome to our community</h1></center>
            <p className="sub-search">*It's a demo community, working for the official one*</p>
            <br />
            <WidgetBot
                server="1097207013576032416"
                channel="1097207014783975496"
                className="discord-embed"
            // theme = "light"
            />


            <GoToTop />


        </div>
    )
}

export default Community;








