import React from 'react';
import { shape, string } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { InlineIcon } from '@iconify/react';
import Typical from 'react-typical';

const Home = ({
  sharedBasicInfo, resumeBasicInfo,
}) => {
  const titles = resumeBasicInfo && resumeBasicInfo.titles ? resumeBasicInfo.titles.map((x) => [x.toUpperCase(), 1500]).flat() : [];

  const HeaderTitleTypeAnimation = React.memo(
    () => <Typical className="title-styles" steps={titles} loop={50} />,
  );

  const name = sharedBasicInfo ? sharedBasicInfo.name : '';

  const downloadCV = () => {
    const link = document.createElement('a');
    link.download = resumeBasicInfo.download.cv_file;
    link.href = `docs/resume/${resumeBasicInfo.download.cv_file}`;
    link.click();
  };

  return (
    <Grid container justifyContent="center">
      <Grid id="home" item xs={12}>
        <InlineIcon icon="la:laptop-code" fontSize="200px" />
        <h1 className="mb-0">
          <Typical steps={[name]} wrapper="p" />
        </h1>
        <div className="title-container">
          <HeaderTitleTypeAnimation />
        </div>
        <div>
          <Button
            variant="outlined"
            size="large"
            onClick={downloadCV}
            style={{ borderRadius: '20px' }}
          >
            {resumeBasicInfo.download.title}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  sharedBasicInfo: shape({
    basic_info: shape({
      description: string,
    }),
  }).isRequired,
  resumeBasicInfo: shape({
    basic_info: shape({
      description: string,
    }),
  }).isRequired,
};

export default Home;
