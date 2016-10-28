# city-picker
mice city picker
# Usage
### Install
```
$ npm install mice-city-picker
```
### Use
```javascript
import CityPicker from 'mice-city-picker'

ReactDOM.render(<CityPicker/>, mountedNode)
```

### With ant.design Form Component
```
// ...
render(){
    return(
        <div>
            <Form horizontal>
                <FormItem
                    id="control-input"
                    label="input control"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                >
                    <Input id="control-input" placeholder="Please enter..." />
                </FormItem>
                <FormItem
                    id="control-input"
                    label="input control"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                >
                    <CityPicker {...getFieldProps('city')} />
                </FormItem>
                <FormItem
                    id="control-input"
                    label="input control"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                >
                    <Input id="control-input" placeholder="Please enter..." />
                </FormItem>
            </Form>
        </div>
    );
}

```

# PropType
```
CityPicker.propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.array,
    onChange: PropTypes.func
};
```