import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import {selectSections} from "../../redux/directory/directory.selectors";

const Directory = ({sections}) =>  {
  
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherPropsSection }) => (
          <MenuItem key={id} subtitle="SHOP NOW" {...otherPropsSection} />
        ))}
      </div>
    );
  
}

const mapStateToProps = (state) => ({
 sections: selectSections(state)
}) ;


export default connect(mapStateToProps)(Directory);
