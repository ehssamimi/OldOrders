import React, {Component} from 'react';

class HeaderList extends Component {
    render() {
        let{recipe}=this.props;

        return (
            <div  className='d-flex align-items-center height10vh'>

                          <span className="mr-3 d-inline-block float-md-left">
                              <div className="glyph">
                                  {recipe ? <span className="glyph-icon iconsminds-yes fd2vw text-primary"></span> :
                                      <span className="glyph-icon iconsminds-close fd2vw text-primary"></span>}
                              </div>
                          </span>
                {recipe ? <h5>فاکتور در پک باشد </h5> : <h5>فاکتور در پک نباشد </h5>}

                <h5 className='ml-auto mr-5'>تاریخ و ساعت ورود</h5>

            </div>
        );
    }
}

export default HeaderList;