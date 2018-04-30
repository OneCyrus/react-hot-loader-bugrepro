import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import {
  PivotItem,
  IPivotItemProps,
  Pivot
} from 'office-ui-fabric-react/lib/Pivot';

export default class PivotBug extends React.Component<{}, {}> {

    render() {
        return (<Pivot>
          <PivotItem linkText='My Files' itemCount={ 42 } itemIcon='Emoji2'>
            <Label>Pivot #1</Label>
          </PivotItem>
          <PivotItem itemCount={ 23 } itemIcon='Recent'>
            <Label>Pivot #2</Label>
          </PivotItem>
          <PivotItem itemIcon='Globe'>
            <Label>Pivot #3</Label>
          </PivotItem>
          <PivotItem linkText='Shared with me' itemIcon='Ringer' itemCount={ 1 }>
            <Label>Pivot #4</Label>
          </PivotItem>
        </Pivot>);
    }
}