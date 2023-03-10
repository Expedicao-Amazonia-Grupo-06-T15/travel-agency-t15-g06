import styled from '@emotion/styled';

export const StyledNotFound = styled.div`
  background-image: url(https://s3-alpha-sig.figma.com/img/92be/f2d9/672aa5ae59ff3bf658a872af15912b61?Expires=1679270400&Signature=IqFlS8zQPSGyDNIuvFbBcfudvAGYDPf~~FkqsmcnhulVgmY5yUJCqBceU7O99NTbWwFQKOovM3dL0GZq5-FpUR~lFjiii8QddCre3i23Xci0aGfTFQYlt2mSwYmJC1FtGJTWr9coPA95bXiOsHyPoylpFRhvMraI5PbmWlCJZnVYEHfE2kVwX0GPfOUYwD-MXvqc3i2Af6foCh6Giq0aMgAynHh67AtPzrai9w1AOaFAWOvAcUuEo4z1jyzvEKj2gWZd7fjMyPjzooZhlqygb08c6fMCrCbYpoG-oeDqY3ngeI1sj-1Hs604cwcxvKpVJk9Aryox8LyP47PTex8SBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4);
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100.3vh;
  position: fixed;
  top: -1px;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0;
    margin-top: clamp(110px, 12.02vw, 173px);
    font-family: 'Ruda';
    width: 100vw;
    max-height: 330px;
    text-align: center;
    font-size: clamp(75px, 23.4375vw, 300px);
    font-weight: 900;
    color: white;
  }
  p {
    color: white;
    font-size: clamp(12px, 3.75vw, 24px);
    font-weight: 700;
    line-height: 23.7px;
    margin-bottom: 34px;
  }
  .btns {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .homeBtn {
    background-color: #729ab8;
    border: none;
    border-radius: 12px;
    width: 179px;
    min-height: 58px;
    height: 12vw;
    max-height: 64px;
  }
  .homeBtn > a {
    text-decoration: none;
    color: white;
    font-family: 'Rubik';
    font-weight: 500;
    font-size: 20px;
    line-height: 23.7px;
  }
  .backBtn {
    background-color: transparent;
    width: 179px;
    min-height: 58px;
    height: 12vw;
    max-height: 64px;
    font-family: 'Rubik';
    font-weight: 500;
    font-size: 20px;
    line-height: 23.7px;

    color: #729ab8;
    border: solid 2px #729ab8;
    border-radius: 12px;
  }
  @media (min-width: 768px) {
    .btns {
      flex-direction: row;
      gap: 30px;
    }
  }
`;
