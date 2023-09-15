import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { getLang } from "utils/navigatorHelpers";
import { createRoutes } from "./routes";
import { createStore, history } from "utils/reduxStoreHelper";
import { LanguageProvider, GlobalLayout, MainLayout } from "./_Shared";

const currentLocale = getLang();
const store = createStore({ locale: currentLocale });
const routes = createRoutes();

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <LanguageProvider>
          <Router history={history}>
            <GlobalLayout>
              <Switch>
                <Route
                  path="/"
                  render={(props) => {
                    return (
                      <LanguageProvider>
                        <MainLayout {...props}>
                          <Switch>
                            {routes.map((route) => {
                              return <Route key={route.path} {...route} />;
                            })}

                            <Redirect from="/" to="/login" />
                            <Redirect from="/*" to="/404" />
                          </Switch>
                        </MainLayout>
                      </LanguageProvider>
                    );
                  }}
                />
              </Switch>
            </GlobalLayout>
          </Router>
        </LanguageProvider>
      </Provider>
    );
  }
}

export default App;
