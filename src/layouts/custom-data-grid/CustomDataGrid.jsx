import { Menu } from 'devextreme-react';
import DataGrid, { Column, Paging, Pager, SearchPanel, Selection, Editing, Texts, LoadPanel, RequiredRule } from 'devextreme-react/data-grid';
import React, { useState, forwardRef } from 'react';
import themes from 'devextreme/ui/themes';

const allowedPageSizes = [8, 12, 20];
const menuItems = [
    {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhds2fzWteXWXIt8WnjKlsKlI1RKoPphgJg&s',
        items: [{
            name: 'Edit row',
            icon: 'edit',
        }, {
            name: 'Delete row',
            icon: 'trash',
        }],
    },
];

const CustomDataGrid = forwardRef(function CustomDataGrid({ dataSource, columns, handleClickMenu, onSelectionChanged, selectedRowKeys }, ref) {
    const renderMenu = (data) => {
        return (
            <Menu
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                dataSource={menuItems}
                displayExpr="name"
                orientation="horizontal"
                showSubmenuMode={'onClick'}
                onItemClick={(e) => handleClickMenu(e, data?.data)}
            />
        );
    };

    return (
        <DataGrid
            style={{ width: '100%', border: '1px solid #e0e0e0' }}
            dataSource={dataSource}
            onSelectionChanged={onSelectionChanged}
            ref={ref}
            selectedRowKeys={selectedRowKeys}
            showBorders={true}
            showColumnLines={true}

        >
            {/* <LoadPanel enabled /> */}
            <Selection
                mode="multiple"
                selectAllMode={"allPages"}
                showCheckBoxesMode={themes.current().startsWith('material') ? 'always' : 'onClick'}
            />
            {columns}
            {/* {columns.map((column) => (
                <Column
                    width={column.width ? column.width : 'auto'}
                    alignment='center'
                    key={column.dataField}
                    dataField={column.dataField}
                    caption={column.caption}
                    allowEditing={column.allowEditing === null ? true : column.allowEditing}
                >
                    {column.requiredRule === true && <RequiredRule />}
                </Column>
            ))} */}
            <Column
                alignment='center'
                caption={''}
                width={'5%'}
                allowEditing={false}
                cellRender={renderMenu}
                formItem={{ visible: false }}
            />
            <Editing mode="popup">
                <Texts confirmDeleteMessage="" />
            </Editing>
            <Paging defaultPageSize={12} />
            <Pager
                showPageSizeSelector={true}
                allowedPageSizes={allowedPageSizes}
            />
        </DataGrid>

    );
});

export default CustomDataGrid;
