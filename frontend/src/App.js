import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import "./App.css";
import AdminRoute from './Route/AdminRoute';
import Home from "./Pages/Home/Home";
import Hotels from "./Pages/Hotels/Hotels";
import News from "./Pages/News/News";
import PrevFilterContext  from "./context/PrevFilterContext";
import DetailSite from "./Pages/DetailSite";
import DetailNews from "./Pages/DetailNews";
import DetailHotel from "./Pages/DetailHotel";
import DetailRoom from "./Pages/DetailRoom";
import Signin from './Pages/Signin';
import Signup from './Pages/Signup'
import LogOut from "./Pages/Logout";
import Payment from "./Pages/Payment";
import ThankYou from "./Pages/Thankyou";
import AccountSetting from "./Pages/AccountSetting";
import AccountBooking from "./Pages/AccountSetting/AccountBooking";
import AccountMemory from "./Pages/AccountSetting/AccountMemory";
import SearchResult from "./Pages/SearchResult";
import PageNotFound from './Pages/PageNotFound';

import Dashboard from './Pages/Admin/Dashboard';
import MainLayout from './Components/Admin/MainLayout';
import Room from './Pages/Admin/RoomAdmin/Room';
import Hotel from './Pages/Admin/HotelAdmin/Hotel';
import Blog from './Pages/Admin/BlogAdmin/Blog';
import User from './Pages/Admin/UserAdmin/User';
import Order from './Pages/Admin/OrderAdmin/Order';
import OrderDetail from './Pages/Admin/OrderAdmin/OrderDetail'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <PrevFilterContext>
            <Switch>
              <Route path="/" exact>
                <AppLayout>
                  <Home />
                </AppLayout>
              </Route>
              <Route path="/search" exact>
                  <AppLayout>
                     <SearchResult />
                  </AppLayout>
              </Route>
              <Route path="/hotels" exact>
                <AppLayout>
                  <Hotels />
                </AppLayout>
              </Route>
              <Route path="/hotel/:hotelId" exact>
                  <AppLayout>
                    <DetailHotel />
                  </AppLayout>
              </Route>
              <Route path="/news" exact>
                <AppLayout>
                  <News />
                </AppLayout>
              </Route>
              <Route path="/new/:newId" exact>
                <AppLayout>
                   <DetailNews />
                </AppLayout>
              </Route>
              <Route path="/room/:roomId" exact>
                  <AppLayout>
                    <DetailRoom />
                  </AppLayout>
              </Route>
              <Route path="/payment" exact>
                  <AppLayout>
                    <Payment />
                  </AppLayout>
              </Route>
              <Route path="/thank-you" exact>
                  <AppLayout>
                    <ThankYou />
                  </AppLayout>
              </Route>
              <Route path="/site/:id" exact>
                  <AppLayout>
                    <DetailSite />
                  </AppLayout>
              </Route>
              <Route path="/account/bookings" exact>
                  <AppLayout>
                     <AccountBooking />
                  </AppLayout>
              </Route>
              <Route path="/account/memory" exact>
                  <AppLayout>
                     <AccountMemory />
                  </AppLayout>
              </Route>
              <Route path="/account" exact>
                  <AppLayout>
                    <AccountSetting />
                  </AppLayout>
              </Route>
              <AdminRoute path="/dashboard" exact>
                <MainLayout>
                  <Dashboard/>
                </MainLayout>
              </AdminRoute>
              <AdminRoute path="/admin/place" exact>
                <MainLayout>
                  <Hotel />
                </MainLayout>
              </AdminRoute>
              <AdminRoute path="/admin/room" exact>
                <MainLayout>
                  <Room />
                </MainLayout>
              </AdminRoute>
              <AdminRoute path="/admin/blog" exact>
                <MainLayout>
                  <Blog />
                </MainLayout>
              </AdminRoute>
              <AdminRoute path="/admin/user" exact>
                <MainLayout>
                  <User />
                </MainLayout>
              </AdminRoute>
              <AdminRoute path="/book" exact>
                <MainLayout>
                  <Order />
                </MainLayout>
              </AdminRoute>
              <AdminRoute path="/book/:id" exact>
                <MainLayout>
                    <OrderDetail />
                </MainLayout>
              </AdminRoute>
              <Route path="/sign-up">
                  <AppLayout>
                      <Signup />
                  </AppLayout>
                </Route>
                <Route path="/sign-in" exact>
                  <AppLayout>
                      <Signin />
                  </AppLayout>
                </Route>
                <Route path="/logout">
                  <AppLayout>
                      <LogOut />
                  </AppLayout>
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>
          </PrevFilterContext>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
