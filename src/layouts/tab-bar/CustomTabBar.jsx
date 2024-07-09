import { TabPanel } from 'devextreme-react';
import React, { useState, useCallback, useRef } from 'react';
import { Item } from 'devextreme-react/cjs/tabs';
import CustomDataGrid from '../custom-data-grid/CustomDataGrid';
import CustomButton from '../custom-button/CustomButton';
import { BsCheck, BsCheckLg, BsTrash3Fill, BsXLg } from 'react-icons/bs';

const CustomTabBar = ({ tabsIconAndText, columns, dataSource }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [singleSelectedRow, setSingleSelectedRow] = useState(null);
    const [dataTable, setDataTable] = useState(dataSource);
    const gridRef = useRef(null);

    const onSelectionChanged = useCallback(
        ({ selectedRowKeys: changedRowKeys, selectedRowsData }) => {
            setDataTable(changedRowKeys);
        }, [],
    );

    console.log("selectedRowKeys", selectedRowKeys);

    const handleClearSelection = useCallback(() => {
        setDataTable(() => dataTable.filter((item) => item.id !== selectedRowKeys.id));
    });

    const handleDeleteSingleItem = useCallback((items) => {
        console.log("items", items);
        setDataTable(() => dataTable.filter((item) => item.id !== items.id));
    });

    const handleEditSingleItem = useCallback((items) => {

    });

    console.log("dtaatable", dataTable);

    const handleClickMenu = useCallback((e, data) => {
        if (e.itemData) {
            if (e.itemData.icon === "edit") {
                console.log("click edit", e.itemData, data);
                // handleEditSingleItem(data);
                editRow(data);
            } else if (e.itemData.icon === "trash") {
                handleDeleteSingleItem(data);
                console.log("click del", e.itemData, data);
            }
            setSingleSelectedRow(e.itemData);
        }
    }, [setSingleSelectedRow]);

    const editRow = useCallback((selectedRowIndex) => {
        console.log("gridref", gridRef.current);
        gridRef?.current.instance.editRow(selectedRowIndex.id);
        gridRef?.current.instance.deselectAll();
    }, [gridRef, singleSelectedRow]);

    return (
        <TabPanel>
            <Item title="Danh sach" icon="floppy">
                <div style={{ marginTop: 20 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 5, marginBottom: 20 }}>
                        <CustomButton onClick={handleClearSelection} text={"Xoa"} color={'red'} icon={<BsTrash3Fill />} />
                        <CustomButton onClick={handleClearSelection} text={"Bat trang thai"} color={'green'} icon={<BsCheckLg />} width={'max-content'} />
                        <CustomButton onClick={handleClearSelection} text={"Tat  trang thai"} color={'red'} icon={<BsXLg />} />
                    </div>
                    <CustomDataGrid
                        ref={gridRef}
                        columns={columns}
                        dataSource={dataTable}
                        handleClickMenu={handleClickMenu}
                        onSelectionChanged={onSelectionChanged}
                    />
                </div>
            </Item>
            <Item title="Notes" icon="comment">
            </Item>
        </TabPanel >
    );
};

export default CustomTabBar;
