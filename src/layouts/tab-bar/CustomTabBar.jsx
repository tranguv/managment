import { TabPanel } from 'devextreme-react';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Item } from 'devextreme-react/cjs/tabs';
import CustomDataGrid from '../custom-data-grid/CustomDataGrid';
import CustomButton from '../custom-button/CustomButton';
import { BsArrowClockwise, BsCheckLg, BsTrash3Fill, BsXLg } from 'react-icons/bs';
import { useLoader } from '../../hooks/useLoader';
import AlertModal from '../alert-modal/AlertModal';

const CustomTabBar = ({ tabsIconAndText, columns, dataSource }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [selectedItemForRestore, setSelectedItemForRestore] = useState([]);
    const [singleSelectedRow, setSingleSelectedRow] = useState(null);
    const [dataTable, setDataTable] = useState(dataSource);
    const [deletedRow, setDeletedRow] = useState([]);

    // edit or delete
    const [currentMode, setCurrentMode] = useState(null);

    // tab index
    const [currentTab, setCurentTab] = useState(0);
    const { showLoader, hideLoader } = useLoader();
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const gridRef = useRef(null);

    const toggleAlertModal = useCallback(() => {
        setDeleteModalVisible(!deleteModalVisible);
    });

    const toggleEditModal = useCallback(() => {
        setEditModalVisible(!editModalVisible);
    });

    const onSelectionChanged = useCallback(
        ({ selectedRowKeys: changedRowKeys, selectedRowsData }) => {
            console.log("changedRowKeys", changedRowKeys);
            setSelectedRowKeys(changedRowKeys);
        }, [],
    );

    const onSelectedRestored = useCallback(({ selectedRowKeys: changedRowKeys, selectedRowsData }) => {
        setSelectedItemForRestore(changedRowKeys);
    }, []);

    const handleClearSelection = useCallback(() => {
        setCurrentMode("delete");
        showLoader("Deleting...");
        const result = dataTable.filter((item) =>
            !selectedRowKeys.includes(item)
        );
        console.log("result", result);
        setDataTable(result);
        setDeletedRow(deletedRow.concat(selectedRowKeys));
        setSelectedRowKeys([]);
        setDeleteModalVisible(false);
        hideLoader();
    }, [dataTable, selectedRowKeys]);

    console.log("deletedRow", deletedRow);

    const handleDeleteSingleItem = useCallback((items) => {
        setCurrentMode("delete");
        showLoader("Deleting...");
        setDataTable(() => dataTable.filter((item) => item.id !== items.id));
        setDeletedRow(() => [...deletedRow, items]);
        hideLoader();
    });

    const handleClickMenu = useCallback((e, data) => {
        if (e.itemData) {
            if (e.itemData.icon === "edit") {
                console.log("click edit", e.itemData, data);
                editRow(data);
            } else if (e.itemData.icon === "trash") {
                handleDeleteSingleItem(data);
                console.log("click del", e.itemData, data);
            }
            setSingleSelectedRow(e.itemData);
        }
    }, [setSingleSelectedRow]);

    const editRow = useCallback((selectedRowIndex) => {
        setCurrentMode("edit");
        gridRef?.current.instance.editRow(selectedRowIndex.id);
        gridRef?.current.instance.deselectAll();
    }, [gridRef, singleSelectedRow]);

    const addRow = useCallback(() => {
        gridRef.current.instance().addRow();
        gridRef.current.instance().deselectAll();
    }, [gridRef]);

    const handleRestore = useCallback(() => {
        setCurentTab(1);
        showLoader("Restoring...");
        const result = deletedRow.filter((item) =>
            !selectedItemForRestore.includes(item)
        );
        setDeletedRow(result);
        dataTable.push(...selectedItemForRestore);
        gridRef?.current.instance.refresh();
        hideLoader();
        setEditModalVisible(false);
    });

    // useEffect(() => {
    //     const refreshTable = () => {
    //         gridRef?.current.refresh(true);
    //     };

    //     refreshTable();
    // }, [dataTable]);

    return (
        <TabPanel selectedIndex={currentTab}>
            <Item title="Danh sach" icon="floppy" key={'tab_1'}>
                <div style={{ marginTop: 20 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 5, marginBottom: 20 }}>
                        <CustomButton
                            onClick={toggleAlertModal}
                            text={"Xóa"}
                            color={'#ff6363'}
                            icon={<BsTrash3Fill />}
                            width={'130px'}
                        />
                        <CustomButton onClick={handleClearSelection} text={"Bat trang thai"} color={'#7eba68'} icon={<BsCheckLg />} width={'max-content'} />
                        <CustomButton onClick={handleClearSelection} text={"Tat  trang thai"} color={'#ff6363'} icon={<BsXLg />} />
                    </div>
                    <CustomDataGrid
                        ref={gridRef}
                        columns={columns}
                        dataSource={dataTable}
                        handleClickMenu={handleClickMenu}
                        onSelectionChanged={onSelectionChanged}
                        selectedRowKeys={selectedRowKeys}
                    />
                </div>
                <AlertModal
                    isOpen={deleteModalVisible}
                    toggle={toggleAlertModal}
                    actionMessage={"Delete"}
                    alertMessage={"Deleted items can be restored later"}
                    icon={<BsTrash3Fill />}
                    alertTitle={"Delete Items"}
                    handleAction={handleClearSelection}
                />
            </Item>
            <Item title="Khôi phục" icon="comment" >
                <div style={{ marginTop: 20 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 5, marginBottom: 20 }}>
                        <CustomButton onClick={toggleEditModal}
                            text={"Khôi phục"} color={'#7eba68'} icon={<BsArrowClockwise />} />
                    </div>
                    <CustomDataGrid
                        columns={columns}
                        dataSource={deletedRow}
                        onSelectionChanged={onSelectedRestored}
                        selectedRowKeys={selectedItemForRestore}
                    />
                </div>
                <AlertModal
                    isOpen={editModalVisible}
                    toggle={toggleEditModal}
                    actionMessage={"Restore"}
                    alertMessage={"Are you sure you want to restore the selected items?"}
                    icon={<BsArrowClockwise />}
                    alertTitle={"Restore Items"}
                    handleAction={handleRestore}
                />
            </Item>
        </TabPanel >
    );
};

export default CustomTabBar;
