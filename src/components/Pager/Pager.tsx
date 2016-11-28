import * as React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

export interface IPaginationProps {
    gotoPage?: (event: React.MouseEvent) => void;
    currentPage?: number;
    changePageSize?: (event: React.MouseEvent) => void;
    firstPage?: (event: React.MouseEvent) => void;
    nextPage?: (event: React.MouseEvent) => void;
    numberOfPages?: number;
    numberPerPage?: number;
    lastPage?: (event: React.MouseEvent) => void;
    previousPage?: (event: React.MouseEvent) => void;
    dataSource?: Array<any>;
    pageSize?: number;
    onPageChange?: (event: React.MouseEvent) => void;
    pageSizerOptions?: Array<any>;
    hidePageSize?: boolean;
    rowCount?: number;
    showDataSourceLength?: boolean;
    hideHeader?: boolean;
}

export default class Pager extends React.Component<any, {}>{
    gotoPage(i) {
        this.props.manager.dataSource.page = i
    }

    onSelected(item) {
        this.props.changePageSize(item);
    }

    lastPage(numberOfPages) {
        this.props.manager.dataSource.page = numberOfPages - 1;
    }

    firstPage() {
        this.props.manager.dataSource.page = 0
    }

    previousPage() {
        this.props.manager.dataSource.page = this.props.manager.dataSource.page - 1;
    }

    nextPage() {
        this.props.manager.dataSource.page = this.props.manager.dataSource.page + 1
    }

    render() {

        const self = this;

        let props = self.props;

        let {
            firstPage,
            previousPage,
            nextPage,
            lastPage,
            gotoPage,
            pageSize,
            pageSizerOptions,
            dataSource,
            rowCount,
            hidePageSize,
            showDataSourceLength,
            hideHeader,
            page
        } = props;

        let paginationPartial = [];

        let numberPerPage, numberOfPages, renderedDataSource;

        let currentPage = page;


        if (rowCount) {
            numberPerPage = pageSize;
            numberOfPages = Math.ceil(rowCount / pageSize);
        } else {
            numberPerPage = pageSize;
            numberOfPages = Math.ceil(dataSource.length / (pageSize));
        }

        for (let i = 0; i < numberOfPages; i++) {
            if (
                currentPage === i - 1 ||
                currentPage === i - 2 ||
                currentPage === i + 2 ||
                currentPage === i ||
                currentPage === i + 1) {
                paginationPartial.push(
                    <Button size="small" tabIndex={-1} advanced checked={currentPage === i ? true : false} onClick={self.gotoPage.bind(self, i) } key={i}>
                        {i + 1}
                    </Button>
                )
            }
        }

        let dataSourceLength = rowCount || dataSource.length;

        return (
            <div className="r-Pagination">
                {(() => {
                    if (numberOfPages !== 1) {
                        return (
                            <Toolbar flush noRadius className="p10 pt0">
                                <Button size="small" disabled={currentPage === 0} tabIndex={-1} onClick={this.firstPage.bind(this)} icon="fast-backward"></Button>
                                <Button size="small" disabled={currentPage === 0} tabIndex={-1} onClick={this.previousPage.bind(this)} icon="step-backward"></Button>
                                {paginationPartial }
                                <Button size="small" disabled={currentPage === numberOfPages - 1} tabIndex={-1} onClick={this.nextPage.bind(this)} icon="step-forward"></Button>
                                <Button size="small" disabled={currentPage === numberOfPages - 1} tabIndex={-1} onClick={this.lastPage.bind(this, numberOfPages) } icon="fast-forward"></Button>
                                {hidePageSize ? null : <Dropdown hideHeader rowIsSelectable="single" onChange={this.onSelected.bind(this) } material size="small" title={"Page Size " + pageSize} pageSizerOptions={pageSizerOptions} dataSource={pageSizerOptions || ['5', '10', '15']} /> }
                            </Toolbar>
                        )
                    } else return null
                })() }
                {showDataSourceLength ? <Toolbar flush noRadius className="p10"><Button simple size="small">{((currentPage + 1) * pageSize) - pageSize + 1 + ' - ' + (((currentPage + 1) * pageSize) > dataSourceLength ? dataSourceLength : (currentPage + 1) * pageSize) + '' + (' of ' + dataSourceLength + ' row(s)') }</Button></Toolbar> : null}
            </div>
        )

    }
}