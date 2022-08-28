import { StyledButton } from ".";
import { assertSnapshots } from "../../test";

describe('StyledButtonSnapshot', () => {
  const mockProps = {
    onClick: ()=>{}
  };

  const configs = [
    {
      props: mockProps,
      desc: 'should render normal styled button'
    }
  ];

  assertSnapshots(StyledButton, configs);
});
