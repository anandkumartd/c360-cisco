import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MUIDataTable from "mui-datatables";
import Paper from '@material-ui/core/Paper';


class HeatTableCard extends Component {
  state = {
rows:[]
  };
  componentDidMount(){
    const profile = this.props.profile;
    const attributes = this.props.attributes;
    const return_biz = profile["bus_name"] == null
        ? ""
        : profile["bus_name"];
    const return_mail =  profile["bus_email"] == null
        ? ""
        : profile["bus_email"];
    const return_employees =  profile["employees"] == null
        ? ""
        : profile["employees"];
    const return_works =  profile["work_emails"] == null
        ? ""
        : profile["work_emails"];
    const return_camp = profile["email_campaign"] == null
         ? ""
        : profile["email_campaign"];
    const return_service = profile["email_service"] == null
        ? ""
       : profile["email_service"];
    const return_type = profile["email_type"] == null
        ? ""
       : profile["email_type"];
    const return_stat = profile["email_status"] == null
        ? ""
       : profile["email_status"];
    const return_date = profile["email_date"] == null
        ? ""
       : profile["email_date"];


       

     
    var array_w =[];
      for (let i = 0; i < return_works.length; i++) {
        var work = return_works[i];
        array_w.push(work);
      }
      console.log(array_w);
        
        let array_b = [];
        for (let j = 0; j < return_employees.length>0; j++) {
          var bizarray = return_employees[j];
          array_b.push(bizarray);
         }
        
      console.log(array_b);
  
        let array_i =[]
        for (let k = 0; k < return_camp.length>0; k++){
          var infoarray = return_camp[k];
          array_i.push(infoarray);
        
        }
        console.log(array_i);
     
        let array_s =[]
        for (let b = 0; b < return_camp.length>0; b++){
          var servarray = return_service[b];
          array_s.push(servarray);
        
        }
        console.log(array_s);

        let array_t =[]
        for (let c = 0; c < return_type.length>0; c++){
          var typarray = return_type[c];
          array_t.push(typarray);
        
        }
        console.log(array_t);

        let array_us =[]
        for (let d = 0; d < return_stat.length>0; d++){
          var usarray = return_stat[d];
          array_us.push(usarray);
        
        }
        console.log(array_us);

        let array_dat =[]
        for (let e = 0; e < return_date.length>0; e++){
          var darray = return_date[e];
          array_dat.push(darray);
        
        }
        console.log(array_dat);


var pair = array_w.map(function(value, index) {
  var myobj = {};
myobj["name"] = value;
myobj["value"] = array_b[index];
myobj["camp"] = array_i[index];
myobj["serv"] = array_s[index];
myobj["type"] = array_t[index];
myobj["stat"] = array_us[index];
myobj["date"] = array_dat[index];
//myobj["info"]= results[index];
  return myobj;

});


var myJSON = JSON.stringify(pair);
console.log(myJSON);


var areaarray;
var durationarray;
var camparray;
var serarray;
var typearray;
var tasarray;
var infarray = [];
var rowarray = [];
var nameArray = [];
var mailArray = [];
var colArray = [];
var labelArray = [];
var newArray = [];
var colArray = [];
var noomi =[];
var knoomi =[];
var cols =[];




function createData(return_biz, return_mail, areaarray, durationarray, camparray, servarray, typearray, tasarray, infarray) {
  return { return_biz, return_mail, areaarray, durationarray,  camparray, servarray, typearray, tasarray, infarray };
}
cols = ['name', 'email', 'campaign', 'service', 'type', 'status', 'date'];

noomi = cols[0];
knoomi = cols[1];

var finalarray =[];

for (let r = 0; r < pair.length; r++) {
var dat = pair[r];
areaarray  = dat.name;
durationarray = dat.value;
camparray =dat.camp;
servarray = dat.serv;
typearray = dat.type;
tasarray = dat.stat;
infarray = dat.date;
var table_name =  areaarray;
var table_mail = durationarray;

var ro = createData(return_biz, return_mail, areaarray, durationarray, camparray, servarray, typearray, tasarray, infarray);
rowarray.push(ro);

var tabel = [durationarray, areaarray, camparray, servarray, typearray, tasarray, infarray];
finalarray.push(tabel);
var qrey = [];
for (let q = 0; q< tabel.length; q++ ){
  qrey= tabel[q];
  newArray.push(qrey);
}
console.log("table:"+tabel);
}
console.log('final:'+finalarray);


/** 
for (let w = 0; w < newArray.length; w++) {
 var dit = newArray[w];
var check = cols.map(function(value, index) {
  var mycheck = {};
mycheck["label"] = value;
mycheck["value"] = newArray[index];
});
console.log(dit);
}*/

//console.log(check);


console.log("newarray:"+newArray);
/** 
Object.keys(pair).forEach(function(name,i) {
areaarray = pair[name].name;
var dur = pair[name].value;
 durationarray = dur;
//orderarray = i+1;
var ro = createData(return_biz, return_mail, areaarray, durationarray);
rowarray.push(ro);
});**/






this.setState({
rows: rowarray,
info: newArray
}); 
  
  }
  render() {
    
    const columns = [
      {
       name: "name",
       label: "Name",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "email",
       label: "Email",
       options: {
        filter: true,
        sort: false,
       }
      },
      {
       name: "campaign",
       label: "Campaign",
       options: {
        filter: true,
        sort: false,
       }
      },
      {
        name: "service",
        label: "Service",
        options: {
         filter: true,
         sort: false,
        }
       },
      {
       name: "type",
       label: "Type",
       options: {
        filter: true,
        sort: false,
       }
      },
      {
        name: "status",
        label: "Status",
        options: {
         filter: true,
         sort: false,
        }
       },
       {
        name: "date",
        label: "Date",
        options: {
         filter: true,
         sort: false,
        }
       },
     ];

     const data = [
    this.state.info
     ];
     
     const options = {
       filterType: 'checkbox',
     };
   
      return (
        
        <div className="div-body">
        <div className="innercontainer">
        <Paper style={{maxHeight:'auto', overflowY:'scroll'}} >
          <Table >
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email Address</TableCell>
                <TableCell align="left">Campaign</TableCell>
                <TableCell align="left">Service</TableCell>
                <TableCell align="left">Type</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             {  this.state.rows.map(row => (
                <TableRow key={row.return_biz}>
                  <TableCell component="th" scope="row">{row.durationarray}</TableCell>
                  <TableCell align="left">{row.areaarray}</TableCell>
                  <TableCell align="left">{row.camparray}</TableCell>
                  <TableCell align="left">{row.servarray}</TableCell>
                  <TableCell align="left">{row.typearray}</TableCell>
                  <TableCell align="left">{row.tasarray}</TableCell>
                  <TableCell align="left">{row.infarray}</TableCell>
                </TableRow>
             ))}
            </TableBody>
          </Table>
        </Paper>
        
  
      
        </div>
      </div>
      );
    }

   
  //}
}
HeatTableCard.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
 null 
)(HeatTableCard);





