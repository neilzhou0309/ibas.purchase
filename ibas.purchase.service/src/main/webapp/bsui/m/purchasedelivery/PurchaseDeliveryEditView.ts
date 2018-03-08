/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as openui5 from "openui5/index";
import * as mm from "3rdparty/materials/index";
import * as bp from "3rdparty/businesspartner/index";
import * as bo from "../../../borep/bo/index";
import { IPurchaseDeliveryEditView } from "../../../bsapp/purchasedelivery/index";
export class PurchaseDeliveryEditView extends ibas.BOEditView implements IPurchaseDeliveryEditView {
    private page: sap.m.Page;
    private layoutMain: sap.ui.layout.VerticalLayout;
    private viewTopForm: sap.ui.layout.form.SimpleForm;
    private viewBottomForm: sap.ui.layout.form.SimpleForm;
    private tablePurchaseDeliveryItem: sap.m.List;
    private childEditForm: sap.ui.layout.form.SimpleForm;
    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;
    /** 添加采购收货-行事件 */
    addPurchaseDeliveryItemEvent: Function;
    /** 删除采购收货-行事件 */
    removePurchaseDeliveryItemEvent: Function;
    /** 选择采购收货供应商信息 */
    choosePurchaseDeliverySupplierEvent: Function;
    /** 选择采购收货价格清单信息 */
    choosePurchaseDeliveryPriceListEvent: Function;
    /** 选择采购收货-行物料主数据 */
    choosePurchaseDeliveryItemMaterialEvent: Function;
    /** 选择采购收货-行 仓库 */
    choosePurchaseDeliveryItemWarehouseEvent: Function;
    /** 选择采购收货-行 物料序列事件 */
    choosePurchaseDeliveryItemMaterialSerialEvent: Function;
    /** 选择采购收货-行 物料批次事件 */
    choosePurchaseDeliveryItemMaterialBatchEvent: Function;
    /** 选择采购收货项目-采购订单事件 */
    choosePurchaseDeliveryPurchaseOrderEvent: Function;
    /** 绘制视图 */
    draw(): any {
        let that: this = this;
        this.viewTopForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            content: [
                // new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_general") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_suppliercode") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.choosePurchaseDeliverySupplierEvent);
                    }
                }).bindProperty("value", {
                    path: "supplierCode"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_suppliername") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    editable: false,
                }).bindProperty("value", {
                    path: "/supplierName"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_contactperson") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    editable: false,
                }).bindProperty("value", {
                    path: "/contactPerson"
                }),
                // new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_date_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_postingdate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("dateValue", {
                    path: "/postingDate"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_documentdate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("dateValue", {
                    path: "/documentDate"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_deliverydate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("dateValue", {
                    path: "/deliveryDate"
                }),
                // new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_docstatus_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_status") }),
                new sap.m.Select("", {
                    items: openui5.utils.createComboBoxItems(ibas.emBOStatus)
                }).bindProperty("selectedKey", {
                    path: "/status",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_documentstatus") }),
                new sap.m.Select("", {
                    items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus)
                }).bindProperty("selectedKey", {
                    path: "/documentStatus",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_approvalstatus") }),
                new sap.m.Select("", {
                    items: openui5.utils.createComboBoxItems(ibas.emApprovalStatus)
                }).bindProperty("selectedKey", {
                    path: "/approvalStatus",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_canceled") }),
                new sap.m.Select("", {
                    items: openui5.utils.createComboBoxItems(ibas.emYesNo)
                }).bindProperty("selectedKey", {
                    path: "canceled",
                    type: "sap.ui.model.type.Integer"
                })
            ]
        });
        this.viewBottomForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_purchasedelivery_remarks") }),
                new sap.m.TextArea("", {
                    rows: 3,
                }).bindProperty("value", {
                    path: "/remarks"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_documenttotal") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/documentTotal"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_taxrate") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/taxRate"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_taxtotal") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/taxTotal"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_discount") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/discount"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_discounttotal") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/discountTotal"
                }),
            ]
        });
        // 子对象列表
        this.tablePurchaseDeliveryItem = new sap.m.List("", {
            inset: false,
            growing: true,
            growingThreshold: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 5),
            growingScrollToLoad: true,
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Auto,
            mode: sap.m.ListMode.None,
            selectionMode: sap.ui.table.SelectionMode.None,
            headerToolbar: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Title("", {
                        text: "单据行",
                        level: "H2"
                    }),
                    // 添加子对象
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_add"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://add",
                        visible: true,
                        press: function (): void {
                            // 重写添加行事件。以适应移动端操作
                            that.addPurchaseDeliveryItemEvent = function (): void {
                                that.childEditForm.setModel(new sap.ui.model.json.JSONModel(this.editData.PurchaseDeliveryItems.create()));
                                that.childEditForm.bindObject("/");
                                this.view.showPurchaseDeliveryItems(this.editData.PurchaseDeliveryItems.filterDeleted());
                            };
                            that.fireViewEvents(that.addPurchaseDeliveryItemEvent);
                            that.tablePurchaseDeliveryItem.swipeOut(null);
                            mainSplit.setShowSecondaryContent(false);
                        }
                    })
                ]
            }),
            swipeContent: new sap.m.Toolbar("", {
                content: [
                    // 编辑子对象
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_edit"),
                        type: sap.m.ButtonType.Accept,
                        icon: "sap-icon://edit",
                        press(oEvent: any): void {
                            let parentControl: any = oEvent.getSource().getParent().getParent();
                            var editBo: bo.PurchaseDeliveryItem = parentControl.getSwipedItem().getBindingContext().getObject();
                            that.childEditForm.setModel(new sap.ui.model.json.JSONModel(editBo));
                            that.childEditForm.bindObject("/");
                            mainSplit.setShowSecondaryContent(false);
                            that.tablePurchaseDeliveryItem.swipeOut(null);
                        }
                    }),
                    // 删除子对象
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_delete"),
                        type: sap.m.ButtonType.Reject,
                        icon: "sap-icon://delete",
                        press(oEvent: any): void {
                            let parentControl: any = oEvent.getSource().getParent().getParent();
                            var deleteBo: bo.PurchaseDeliveryItem = parentControl.getSwipedItem().getBindingContext().getObject();
                            that.fireViewEvents(that.removePurchaseDeliveryItemEvent,
                                deleteBo
                            );
                            that.tablePurchaseDeliveryItem.swipeOut(null);
                        }
                    }),
                ]
            }),
        });
        let ibas.IList_child_customer: sap.m.ObjectListItem = new sap.m.ObjectListItem("", {
            title: "{itemCode}",
            type: "Active",
            attributes: [
                new sap.m.ObjectAttribute("", {
                    text: "{price} * {quantity}",
                    type: sap.ui.model.type.Integer,
                })
            ]
        });
        ibas.IList_child_customer.bindProperty("number", {
            parts: [{ path: "lineTotal" }],
            type: sap.ui.model.type.Currency,
            formatOptions: { showMeasure: false }
        });
        that.tablePurchaseDeliveryItem.bindItems({
            path: "/rows",
            template: ibas.IList_child_customer,
        });
        this.layoutMain = new sap.ui.layout.VerticalLayout("", {
            height: "100%",
            content: [
                this.viewTopForm,
                this.tablePurchaseDeliveryItem,
                this.viewBottomForm,
            ]
        });
        let screencontainer: sap.m.ScrollContainer = new sap.m.ScrollContainer("", {
            vertical: true,
            horizontal: false,
            height: "100%",
            content: [
                this.layoutMain
            ]
        });
        // 子对象编辑页
        this.childEditForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            content: [
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedeliveryitem_linestatus") }),
                new sap.m.Select("", {
                    width: "100%",
                    items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus)
                }).bindProperty("selectedKey", {
                    path: "lineStatus",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedeliveryitem_itemcode") }),
                new sap.m.Input("", {
                    width: "100%",
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.choosePurchaseDeliveryItemMaterialEvent,
                            // 获取当前对象
                            this.getBindingContext().getObject()
                        );
                    }
                }).bindProperty("value", {
                    path: "itemCode"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedeliveryitem_price") }),
                new sap.m.Input("", {
                    width: "100%",
                    type: sap.m.InputType.Number
                }).bindProperty("value", {
                    path: "price"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedeliveryitem_quantity") }),
                new sap.m.Input("", {
                    width: "100%",
                    type: sap.m.InputType.Number
                }).bindProperty("value", {
                    path: "quantity"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedeliveryitem_linetotal") }),
                new sap.m.Input("", {
                    width: "100%",
                    type: sap.m.InputType.Number,
                }).bindProperty("value", {
                    path: "lineTotal"
                }),
            ]
        });
        let childPage: sap.m.Page = new sap.m.Page("", {
            showHeader: false,
            footer: new sap.m.Toolbar("", {
                content: [
                    new sap.m.ToolbarSpacer(""),
                    // 删除子对象
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_delete"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://delete",
                        press: function (): void {
                            let deleteBo: bo.PurchaseDeliveryItem = that.childEditForm.getBindingContext().getObject();
                            that.fireViewEvents(that.removePurchaseDeliveryItemEvent,
                                deleteBo
                            );
                            mainSplit.setShowSecondaryContent(true);
                        }
                    }),
                    // 编辑子对象完成
                    new sap.m.Button("", {
                        text: "完成",
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://save",
                        press: function (): void {
                            mainSplit.setShowSecondaryContent(true);
                        }
                    })
                ]
            }),
            content: [this.childEditForm]
        });
        let mainSplit: sap.ui.unified.SplitContainer = new sap.ui.unified.SplitContainer("", {
            showSecondaryContent: true,
            orientation: sap.ui.core.Orientation.Horizontal,
            secondaryContentWidth: "100%",
        });
        mainSplit.addSecondaryContent(screencontainer);
        mainSplit.addContent(childPage);
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_save"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://save",
                        press: function (): void {
                            that.fireViewEvents(that.saveDataEvent);
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_delete"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://delete",
                        press: function (): void {
                            that.fireViewEvents(that.deleteDataEvent);
                        }
                    }),
                    new sap.m.ToolbarSeparator(""),
                    new sap.m.MenuButton("", {
                        text: ibas.strings.format("{0}/{1}",
                            ibas.i18n.prop("shell_data_new"), ibas.i18n.prop("shell_data_clone")),
                        icon: "sap-icon://create",
                        type: sap.m.ButtonType.Transparent,
                        menu: new sap.m.Menu("", {
                            items: [
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("shell_data_new"),
                                    icon: "sap-icon://create",
                                    press: function (): void {
                                        // 创建新的对象
                                        that.fireViewEvents(that.createDataEvent, false);
                                    }
                                }),
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("shell_data_clone"),
                                    icon: "sap-icon://copy",
                                    press: function (): void {
                                        // 复制当前对象
                                        that.fireViewEvents(that.createDataEvent, true);
                                    }
                                }),
                            ],
                        })
                    }),
                ]
            }),
            content: [mainSplit]
        });
        this.id = this.page.getId();
        return this.page;
    }
    /** 改变视图状态 */
    private changeViewStatus(data: bo.PurchaseDelivery): void {
        if (ibas.objects.isNull(data)) {
            return;
        }
        // 新建时：禁用删除，
        if (data.isNew) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
        }
        // 不可编辑：已批准，
        if (data.approvalStatus === ibas.emApprovalStatus.APPROVED
            || data.documentStatus === ibas.emDocumentStatus.CLOSED
            || data.canceled === ibas.emYesNo.YES) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                openui5.utils.changeToolbarSavable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
            openui5.utils.changeFormEditable(this.layoutMain, false);
        }
    }
    /** 显示数据 */
    showPurchaseDelivery(data: bo.PurchaseDelivery): void {
        this.layoutMain.setModel(new sap.ui.model.json.JSONModel(data));
        this.layoutMain.bindObject("/");
        // 监听属性改变，并更新控件
        openui5.utils.refreshModelChanged(this.layoutMain, data);
        // 改变视图状态
        this.changeViewStatus(data);
    }
    /** 显示数据 */
    showPurchaseDeliveryItems(datas: bo.PurchaseDeliveryItem[]): void {
        this.tablePurchaseDeliveryItem.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
        // 监听属性改变，并更新控件
        openui5.utils.refreshModelChanged(this.tablePurchaseDeliveryItem, datas);
    }
}