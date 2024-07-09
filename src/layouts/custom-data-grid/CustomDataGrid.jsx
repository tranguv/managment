import { Button, CheckBox, Menu } from 'devextreme-react';
import DataGrid, { Column, Paging, Pager, SearchPanel, Selection, Editing, Texts, LoadPanel } from 'devextreme-react/data-grid';
import React, { useState, forwardRef } from 'react';
import themes from 'devextreme/ui/themes';

const allowedPageSizes = [8, 12, 20];
const menuItems = [
    {
        icon: 'https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png',
        items: [{
            name: 'Edit row',
            icon: 'edit',
        }, {
            name: 'Delete row',
            icon: 'trash',
        }],
    },
];

const CustomDataGrid = forwardRef(function CustomDataGrid({ dataSource, columns, handleClickMenu, onSelectionChanged }, ref) {
    const [checkBoxesMode, setCheckBoxesMode] = useState(
        themes.current().startsWith('material') ? 'always' : 'onClick',
    );
    const [loading, setLoading] = useState(false);

    const renderMenu = (data) => {
        return (
            <div>
                <Menu
                    dataSource={menuItems}
                    displayExpr="name"
                    orientation="horizontal"
                    onItemClick={(e) => handleClickMenu(e, data?.data)}
                />
            </div>
        );
    };

    return (
        <DataGrid
            style={{ width: '100%' }}
            dataSource={dataSource}
            onSelectionChanged={onSelectionChanged}
            ref={ref}
        // selectedRowKeys={selectedRowKeys}
        >
            <LoadPanel enabled />
            <Selection
                mode="multiple"
                selectAllMode={"allPages"}
                showCheckBoxesMode={themes.current().startsWith('material') ? 'always' : 'onClick'}
            />
            {columns.map((column) => (
                <Column
                    width={column.width ? column.width : 'auto'}
                    alignment='center'
                    key={column.dataField}
                    dataField={column.dataField}
                    caption={column.caption}
                />
            ))}
            <Column
                alignment='center'
                caption={''}
                width={'10%'}
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
