import React, { useState, useEffect } from 'react';
import { Col, Container, Row, TabContent, TabPane } from 'reactstrap';

import SignInForm from 'components/User/SignInForm';
import SignUpForm from 'components/User/SignUpForm';
import ForgotPassword from 'components/User/ForgotPassword';

import Background from 'components/Background/Background';
import background from 'assets/img/splashscreen.png';
import { Box } from 'components/User/User.styled';
import NavPillsButtonGroup from 'components/NavPillsButtonGroup/NavPillsButtonGroup';
import NavPillsButton from 'components/NavPillsButton/NavPillsButton';

const Login = ({ shouldComplete, user }) => {
  const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);
  const [errorMessage, updateErrorMessage] = useState(null);

  const [activeTab, setActiveTab] = useState('signInForm');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  useEffect(() => {
    if (shouldComplete) {
      setActiveTab('signInForm');
    }
  }, [shouldComplete]);

  // TODO - Adicionar transição (animation) suave entre login e cadastro
  return (
    <>
      <Container>
        <Background
          src={background}
          alt="Imagem de fundo com a visão aérea de uma cidade com prédios altos em degradê das cores violeta e laranja claro"
        />
        <Row className="pt-5 mb-5 align-items-center justify-content-center">
          <Col xs="12" sm="8" md="6" lg="4">
            <Box>
              <NavPillsButtonGroup className="justify-content-center mb-4" size="sm">
                <NavPillsButton toggleTabId="signInForm" toggle={toggle} activeTab={activeTab}>Entrar</NavPillsButton>
                <NavPillsButton toggleTabId="signUpForm" toggle={toggle} activeTab={activeTab}>Cadastrar</NavPillsButton>
              </NavPillsButtonGroup>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="signInForm">
                  {showPasswordRecovery ? (
                    <ForgotPassword
                      hideForgotPassword={() => setShowPasswordRecovery(false)}
                    />
                  ) : (
                    <>
                      {/* TODO: ESTILIZAR ESTA MENSAGEM DE ERRO */}
                      {errorMessage}
                      <SignInForm
                        setShowForgotPasswordForm={setShowPasswordRecovery}
                        updateErrorMessage={updateErrorMessage}
                      />
                    </>
                  )}
                </TabPane>
                <TabPane tabId="signUpForm">
                  <SignUpForm onBackClick={() => setActiveTab('signInForm')} user={user} />
                </TabPane>
              </TabContent>
            </Box>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
