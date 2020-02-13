import React, {Component} from 'react';
import css from './ConversionsTable.css';

export default class ConversionsTable extends Component {
  constructor(props) {
    super(props);
    this.modalBackgroundClick = this.modalBackgroundClick.bind(this);
    this.listChange = this.listChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.valueUpdate = this.valueUpdate.bind(this);

    this.lengthList = ['m', 'mm', 'cm', 'km', 'um', 'nm', 'mile', 'yard', 'foot', 'inch', 'naut_mile'],
    this.areaList = ['sq_m', 'sq_k', 'sq_y', 'sq_ft', 'sq_inch', 'hectare', 'acre'],
    this.massList = ['gram', 'kgram', 'mgram', 'ugram', 'imperial_ton', 'metric_ton', 'us_ton', 'stone', 'pound', 'ounce'],
    this.state = {
      types : ['length','area', 'mass'],
      ops: [],
      conversionObj: {
        a_val: null,
        b_val: null,
        a_unit: null
      }
    }
  }

  modalBackgroundClick (event) {
    event.currentTarget.style.display = 'none';
    document.getElementsByClassName(css.modalContent)[0].style.display = "none";
  }

  listChange (event) {
    let value = event.currentTarget.value;
    switch (value) {
      case 'length':
        this.setState({ops: this.lengthList}); break;
      case 'area':
        this.setState({ops: this.areaList}); break;
      case 'mass':
        this.setState({ops: this.massList}); break;
      default:
        this.setState({ops: []}); return;
      }
      event.currentTarget.style.backgroundColor = 'gray';
  }

  valueUpdate () {


    let unitA = document.getElementsByClassName(css.itemConvertBase)[0].firstChild.value;
    let unitB = document.getElementsByClassName(css.itemConvertCalculate)[0].firstChild.value;
    let inputElement = document.getElementsByClassName(css.itemConvertCalculate)[0].childNodes[1].firstChild;
    let value = document.getElementsByClassName(css.itemConvertBase)[0].childNodes[1].firstChild.value;
    let mode = document.getElementsByClassName(css.itemConvertTypeList)[0];

    const options =  {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({measureType: mode.value , units: [unitA, unitB]})
    };

    fetch(new Request(`${window.location.origin}/measureUnits`,options))
    .then(res => res.json())
    .then(factors => { inputElement.value = (Math.pow((factors.a/ factors.b), - 1) * value).toFixed()})
    .catch(err => console.log(err))
  }

  clearInput (event) {
    let node = event.currentTarget.nextSibling
    this.setState({ops: []});
    node.value = "";
    node.style.backgroundColor = 'white';
    document.getElementsByClassName(css.itemConvertBase)[0].firstChild.nextSibling.firstChild.value = '';
    document.getElementsByClassName(css.itemConvertCalculate)[0].firstChild.nextSibling.firstChild.value = '';
  }

  render () {
    return (
      <div>
        <div onClick = {this.modalBackgroundClick} className = {this.props.modalClass}></div>

        <div className = {css.modalContent} id = {"modalContent"} >
          <div className = {css.canvas}>

            <label className = {css.typeLabel}> choose a type </label>
            <button className = {css.deleteButton} onClick = {this.clearInput}> </button>

            <input list = {'measure-types'} name = {'conversion-type'} className = {css.itemConvertTypeList} onChange = {this.listChange} />

            <datalist id = {'measure-types'}>
                {this.state.types.map( (element, index) => <option  key = {index} value = {element}  />) }
            </datalist>

            {[ {class:'itemConvertBase'}  , {class:'itemConvertCalculate' } ]. map (( obj, index) => {
              return <div key = {index} className = {css[obj.class]}>
                <select onChange = {this.valueUpdate}  >
                  {this.state.ops.map( (element, index) => {
                    return <option  key = {index} value = {element} > {element} </option>
                  })}
                </select>

                <form>
                  <input type = {"text"}  onChange = {this.valueUpdate} ></input>
                </form>
              </div>
            })}

          </div>
        </div>
    </div>
  )};
}


