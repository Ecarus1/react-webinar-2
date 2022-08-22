import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import useTranslate from "../../hooks/use-translate";
import Tools from "../../containers/tools";
import Layout from "../../components/layout";
import LayoutFlex from "../../components/layout-flex";
import LocaleSelect from "../../containers/locale-select";
import AuthControl from "../../containers/auth-control";
import useSelector from "../../hooks/use-selector";
import SpinnerCircle from "../../components/spinner-circle";

import LayoutProfile from "../../components/layout-profile";

function Profile() {
  const {t} = useTranslate();

  const select = useSelector(state => ({
    user: state.authentication.user,
    waiting: state.authentication.waiting
  }))

  return(
    <Layout
      top={
        <LayoutFlex flex="end" paddingMin={true}>
          <AuthControl/>
        </LayoutFlex>
      }
      head={
        <LayoutFlex flex="between">
          <h1>{t('title')}</h1>
          <LocaleSelect/>
        </LayoutFlex>
      }>
      <Tools/>
      {
        select.waiting 
        ? 
          <SpinnerCircle/> 
        :
          <LayoutFlex flex="start">
            <LayoutProfile user={select.user} t={t}/>
          </LayoutFlex>
      }
    </Layout>
  )
}

export default React.memo(Profile)

