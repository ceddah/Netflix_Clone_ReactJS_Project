import React from 'react'
import { FaqsContainer } from '../containers/Faqs';
import { OptForm, Feature } from '../components';
import { FooterContainer } from '../containers/Footer';
import { HeaderContainer } from '../containers/Header';
import { JumbotronContainer } from '../containers/Jumbotron';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV Programs and more.</Feature.Title>
                    <Feature.SubTitle>Watch it anywhere. Cancel at anytime.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Get Started</OptForm.Button>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />   
        </>
    )
}
