import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthContext from './utils/authContext';
// import Homepage from './screens/Homepage';
// import BlogPost from './screens/BlogPost';
import Login from './screens/Login';
import Profile from './screens/Profile';
import AboutUni from './screens/AboutUni';
import Branches from './screens/Branches';
import OrganizationalChart from './screens/OrganizationalChart';
import FinancialReport from './screens/FinancialReport';
import DonationsReport from './screens/DonationsReport';
import OperationReport from './screens/OperationReport';
import InspectorsReport from './screens/InspectorsReport';
import GoalsandGuidelines from './screens/GoalsandGuidelines';
import BoardofTrustees from './screens/BoardofTrustees';
import Inspector from './screens/Inspector';
import FAQ from './screens/FAQ';
import SupportSus from './screens/SupportSus';
import HelpActionProjs from './screens/HelpActionProjs';
import JoinDonators from './screens/JoinDonators';
import SupportInt from './screens/SupportInt';
import BecomeaDonator from './screens/BecomeaDonator';
import DonateviaTime from './screens/DonateviaTime';
import DonateEdu from './screens/DonateEdu';
import ContactUs from './screens/ContactUs';
import Donator from './screens/Donator';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';
import withScripts from './utils/withScripts';
import AuthProvider from './components/AuthProvider';

const Homepage = lazy(() => import('./screens/Homepage'));
const BlogPost = lazy(() => import('./screens/BlogPost'));

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <ScrollToTop>
            <Header />
            <Suspense
              fallback={() => <div style={{ height: '100%' }}>Loading</div>}>
              <Switch>
                <Route path="/" exact component={withScripts(Homepage)} />
                <Route path="/blogPost/:id" component={withScripts(BlogPost)} />
                <Route path="/login" component={withScripts(Login)} />
                <Route path="/AboutUni" component={AboutUni} />
                <Route path="/Donator" component={Donator} />
                <Route path="/Branches" component={Branches} />
                <Route path="/OperationReport" component={OperationReport} />
                <Route path="/DonationsReport" component={DonationsReport} />
                <Route path="/FinancialReport" component={FinancialReport} />
                <Route
                  path="/OrganizationalChart"
                  component={OrganizationalChart}
                />
                <Route path="/BoardofTrustees" component={BoardofTrustees} />
                <Route path="/Inspector" component={Inspector} />
                <Route path="/ContactUs" component={ContactUs} />
                <Route path="/FAQ" component={FAQ} />
                <Route path="/JoinDonators" component={JoinDonators} />
                <Route path="/DonateEdu" component={DonateEdu} />
                <Route path="/SupportInt" component={SupportInt} />
                <Route path="/DonateviaTime" component={DonateviaTime} />
                <Route path="/HelpActionProjs" component={HelpActionProjs} />
                <Route path="/SupportSus" component={SupportSus} />
                <Route path="/BecomeaDonator" component={BecomeaDonator} />
                <Route
                  path="/GoalsandGuidelines"
                  component={GoalsandGuidelines}
                />
                <Route path="/InspectorsReport" component={InspectorsReport} />
                <PrivateRoute path="/profile" component={Profile} />
              </Switch>
            </Suspense>
            <Footer />
          </ScrollToTop>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
