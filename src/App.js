import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './resources/styles/themes/theme';
import GlobalStyles from './resources/styles/global';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  const [sharedData, setSharedData] = useState();
  const [resumeData, setResumeData] = useState();
  const [loading, setLoading] = React.useState(true);

  const swapCurrentlyActiveLanguage = (LangIconId) => {
    let chosenLangIconId = LangIconId;
    if (LangIconId === window.$primaryLanguageIconId) {
      chosenLangIconId = window.$primaryLanguageIconId;
    }
    if (LangIconId === window.$secondaryLanguageIconId) {
      chosenLangIconId = window.$secondaryLanguageIconId;
    }
    if (LangIconId === window.$thirdLanguageIconId) {
      chosenLangIconId = window.$thirdLanguageIconId;
    }

    let flag = document.getElementById(window.$primaryLanguageIconId);
    if (flag) {
      flag.setAttribute('filter', 'brightness(40%)');
    }
    flag = document.getElementById(window.$secondaryLanguageIconId);
    if (flag) {
      flag.setAttribute('filter', 'brightness(40%)');
    }
    flag = document.getElementById(window.$thirdLanguageIconId);
    if (flag) {
      flag.setAttribute('filter', 'brightness(40%)');
    }

    flag = document.getElementById(chosenLangIconId);
    if (flag) {
      flag.removeAttribute('filter', 'brightness(40%)');
    }
  };

  const loadResumeFromPath = async (path) => {
    const endpoint = 'https://yhqo2vwdifggdj3bcw2uczbloe.appsync-api.ca-central-1.amazonaws.com/graphql';
    const apikey = 'da2-xrpsr6rkczerpldoisi3lv3wou';
    const contentInfo = `
        query MyQuery($id: ID!) {
          getJtdevInfo(id: $id) {
            id
            content
          }
        }`;
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apikey,
      },
      body: JSON.stringify({
        query: contentInfo,
        variables: { id: path },
      }),
    };
    await fetch(endpoint, request)
      .then((res) => res.json())
      .then(
        (result) => {
          setResumeData(JSON.parse(result.data.getJtdevInfo.content));
          setLoading(false);
        },
        (error) => {
          // eslint-disable-next-line
          console.log(path, error);
          setLoading(false);
        },
      );
  };

  const loadPickedLanguage = async (pickedLanguage, selectedIconId) => {
    await swapCurrentlyActiveLanguage(selectedIconId);
    document.documentElement.lang = pickedLanguage;
    let resumePath = '';
    if (document.documentElement.lang === window.$primaryLanguage) {
      resumePath = 'res_en';
    }
    if (document.documentElement.lang === window.$secondaryLanguage) {
      resumePath = 'res_br';
    }
    if (document.documentElement.lang === window.$thirdLanguage) {
      resumePath = 'res_fr';
    }
    await loadResumeFromPath(resumePath);
  };

  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const globalTheme = theme === 'light' ? lightTheme : darkTheme;

  const loadSharedData = async () => {
    const endpoint = 'https://yhqo2vwdifggdj3bcw2uczbloe.appsync-api.ca-central-1.amazonaws.com/graphql';
    const apikey = 'da2-3n7nbgypxvcdfndxkvmtnavd2i';
    const contentInfo = `
        query MyQuery($id: ID!) {
          getJtdevInfo(id: $id) {
            id
            content
          }
        }`;
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apikey,
      },
      body: JSON.stringify({
        query: contentInfo,
        variables: { id: 'portfolio_shared_data' },
      }),
    };
    await fetch(endpoint, request)
      .then((res) => res.json())
      .then(
        (result) => {
          setSharedData(JSON.parse(result.data.getJtdevInfo.content));
        },
        (error) => {
          // eslint-disable-next-line
          console.log(`data/portfolio_shared_data.json`, error);
        },
      );
  };

  const loadAppData = async () => {
    setLoading(true);
    await loadSharedData();
    await loadPickedLanguage(window.$primaryLanguage, window.$primaryLanguageIconId);
  };

  useEffect(() => {
    loadAppData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || !componentMounted) {
    return <CircularProgress size={68} sx={{ position: 'absolute', top: '50%', left: '50%' }} />;
  }
  return (
    <>
      {loading && <CircularProgress size={68} sx={{ position: 'absolute', top: '50%', left: '50%' }} />}
      {!loading
        && (
        <ThemeProvider theme={globalTheme}>
          <GlobalStyles />
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8}>
              <Header
                theme={theme}
                toggleTheme={toggleTheme}
                loadPickedLanguage={loadPickedLanguage}
                navbarItems={resumeData.basic_info.navbarItems}
              />
            </Grid>
            <Grid item xs={12}>
              <Content
                sharedData={sharedData}
                resumeData={resumeData}
              />
              <Footer
                sharedBasicInfo={sharedData.basic_info}
              />
            </Grid>
          </Grid>
        </ThemeProvider>
        )}
    </>
  );
};

export default App;
