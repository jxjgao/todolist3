import styled from '@emotion/styled';

export const MainFilterWrapper= styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    `;
export const DownArrow = styled.span `
    font-size: 20px;
    `;

export const FilterMainButton = styled.button`
    font-family: Cooperplate;
    font-size: 16px;
    width: 120px;
    color: white;
    background-color: #5FA8D3;
    &:hover{
        background-color: white;
        color: #5FA8D3;
     }
`;

export const FilterBodyButton = styled.button`
    font-family: Cooperplate;
    width: 110px;
    font-size: 16px;
    color: white;
    background-color: #5FA8D3;
    &:hover{
        background-color: white;
        color: #5FA8D3;
     }
`;

export const FilterBodyWrapper = styled.div`
    display: inline-block;
    position: relative;
    margin-top: 5px;
    left: 80%;
`;