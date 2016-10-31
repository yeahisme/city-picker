# city-picker
mice city picker
# Usage
### Install
```
$ npm install mice-city-picker
```
### DEVELOP
```
// run in dir root
$ npm run dev
```
### Use
```javascript
import CityPicker from 'mice-city-picker'

ReactDOM.render(<CityPicker/>, mountedNode)
```
### With ant.design Form Component
## IMPORTANT!!!

#### value should be ctrip city format

#### use CityPicker.mapCityItem to convert

#### CityPicker.mapCityItem(value);

```
someMehod (){
    this.props.form.setFieldsValue({
        city: CityPicker.mapCityItem(['上海']) // CityPicker.mapCityItem to convert into ctrip city format
    });
}
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