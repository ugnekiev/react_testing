import { render, screen } from '@testing-library/react';
import App from './App';

// testcase
// testcasu gali buti labai daug. turi skirtis pavadinimai ()
test('renders learn react link', () => {

  // given - PRECONDITIONS (prielaidos), create what is needed for the test
  render(<App />);
  const linkElement = screen.getByText("Hello world");
  // screen.debug(linkElement);

  // when ACTION (kazka padarau)

  
  // then EXPECTATIONS (kazkas nutinka) /behavior expectations / assertions
  expect(linkElement).toBeInTheDocument();

  //teardown (dabar daznai nereikia, nes dalykus sunaikina automatiskai)

  
  
 
});
