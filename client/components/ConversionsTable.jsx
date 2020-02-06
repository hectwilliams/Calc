import React, {Component} from 'react';
import css from './ConversionsTable.css';

export default class ConversionsTable extends Component {
  constructor(props) {
    super(props);
    this.modalBackgroundClick = this.modalBackgroundClick.bind(this);
    this.listChange = this.listChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.valueUpdate = this.valueUpdate.bind(this);
    this.lengthList = ['ms'],
    this.areaList = ['m'],
    this.massList = [],
    this.state = {
      types : ['Length','Area', 'Mass'],
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
    let nodeA, nodeB;
    switch (value) {
      case 'Length':
        this.setState({ops: this.lengthList}); break;
      case 'Area':
        this.setState({ops: this.areaList}); break;
      case 'Mass':
        this.setState({ops: this.massList}); break;
      default:
        this.setState({ops: []}); return;
      }
      event.currentTarget.style.backgroundColor = 'gray';
  }

  valueUpdate (event) {
    console.log(event.currentTarget.value)
  }

  clearInput (event) {
    let node = event.currentTarget.nextSibling
    this.setState({ops: []});
    node.value = "";
    node.style.backgroundColor = 'white';
    document.getElementsByClassName(css.itemConvertBase)[0].firstChild.nextSibling.firstChild.value = '';

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
                <select  >
                  {this.state.ops.map( (element, index) => {
                    return <option  key = {index} value = {element} > {element}   </option>
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


