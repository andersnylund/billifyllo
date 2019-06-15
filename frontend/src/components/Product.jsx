import React from 'react';
import { shape, string, number } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: var(--background-white);
  box-shadow: var(--box-shadow-lg);
  margin: var(--size-6);
  border-radius: var(--size-5);
  border: 0.5px solid var(--grey-9);
  display: flex;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--size-8);
  img {
    max-height: var(--size-12);
    height: auto;
  }
`;

const Content = styled.div`
  background-color: hsl(0, 0%, 98%);
  p {
    color: var(--grey-5);
  }
`;

const MainContent = styled.div`
  padding: var(--size-6) var(--size-6);
`;

const Extra = styled.div`
  font-size: var(--size-4);
  padding: var(--size-6) var(--size-6);
  border-top: 2px solid var(--grey-9);
  tbody {
    width: 100%;
  }
  tr :nth-child(1) {
    color: var(--grey-3);
    padding-right: var(--size-4);
  }
  tr :nth-child(2) {
    color: var(--grey-7);
  }
  line-height: var(--size-5);
`;

const Product = ({ product }) => (
  <Wrapper>
    <Image>
      <img
        src={`https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/${
          product.id
        }/${product.nimi}.jpg`}
        alt={product.nimi}
      />
    </Image>
    <Content>
      <MainContent>
        <h3>{product.nimi}</h3>
        <p>{product.luonnehdinta}</p>
      </MainContent>
      <Extra>
        <p>{product.tyyppi}</p>
        <table>
          <tbody>
            {product.valmistaja !== null && (
              <tr>
                <td>Valmistaja</td>
                <td>{product.valmistaja}</td>
              </tr>
            )}
            <tr>
              <td>Hinta</td>
              <td>{`${product.hinta} €`}</td>
            </tr>
            {product.alkoholilitrahinta !== null && (
              <tr>
                <td>Alkoholin litrahinta</td>
                <td>{`${product.alkoholilitrahinta} €/l`}</td>
              </tr>
            )}
            {product.litrahinta !== null && (
              <tr>
                <td>Litrahinta</td>
                <td>{`${product.litrahinta} €/l`}</td>
              </tr>
            )}
            {product.pakkaustyyppi !== null && (
              <tr>
                <td>Pakkaustyyppi</td>
                <td>{product.pakkaustyyppi}</td>
              </tr>
            )}
            {product.pullokoko !== null && (
              <tr>
                <td>Pullokoko</td>
                <td>{`${product.pullokoko} litraa`}</td>
              </tr>
            )}
          </tbody>
        </table>
      </Extra>
    </Content>
  </Wrapper>
);

Product.propTypes = {
  product: shape({
    nimi: string.isRequired,
    valmistaja: string,
    luonnehdinta: string.isRequired,
    tyyppi: string.isRequired,
    hinta: number.isRequired,
    alkoholiprosentti: number,
    alkoholilitrahinta: number,
    pakkaustyyppi: string,
    pullokoko: number,
  }).isRequired,
};

export default Product;
