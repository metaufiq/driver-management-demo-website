import { assertSnapshots } from "../../test";
import Button from ".";

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

  assertSnapshots(Button, configs);
});
