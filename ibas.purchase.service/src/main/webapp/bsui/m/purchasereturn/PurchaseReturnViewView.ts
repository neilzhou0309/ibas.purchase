/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as openui5 from "openui5/index";
import * as bo from "../../../borep/bo/index";
import { IPurchaseReturnViewView } from "../../../bsapp/purchasereturn/index";
export class PurchaseReturnViewView extends ibas.BOViewView implements IPurchaseReturnViewView {
    private page: sap.m.Page;
    private layoutMain: sap.ui.layout.VerticalLayout;
    private viewTopForm: sap.ui.layout.form.SimpleForm;
    private viewBottomForm: sap.ui.layout.form.SimpleForm;
    private tablePurchaseReturnItem: sap.m.List;
    private childEditForm: sap.ui.layout.form.SimpleForm;
    /** 绘制视图 */
    draw(): any {
        let that: this = this;
        this.viewTopForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            content: [
                // new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_base_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_docentry") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "docEntry",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_suppliercode") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "supplierCode"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_suppliername") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "supplierName"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_date_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_postingdate") }),
                new sap.m.Text("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat:ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("text", {
                    path: "/postingDate",
                    type: "sap.ui.model.type.Date",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_documentdate") }),
                new sap.m.Text("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat:ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("text", {
                    path: "/documentDate",
                    type: "sap.ui.model.type.Date",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_deliverydate") }),
                new sap.m.Text("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat:ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("text", {
                    path: "/deliveryDate",
                    type: "sap.ui.model.type.Date",
                }),
                // new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_docstatus_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_status") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/status",
                    formatter(data: any): any {
                        return ibas.enums.describe(ibas.emBOStatus, data);
                    }
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_documentstatus") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/documentStatus",
                    formatter(data: any): any {
                        return ibas.enums.describe(ibas.emDocumentStatus, data);
                    }
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_approvalstatus") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/approvalStatus",
                    formatter(data: any): any {
                        return ibas.enums.describe(ibas.emDocumentStatus, data);
                    }
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_canceled") }),
                new sap.m.Text("", {
                    wrapping: false
                }).bindProperty("text", {
                    path: "canceled",
                    formatter(data: any): any {
                        return ibas.enums.describe(ibas.emYesNo, data);
                    }
                })
            ]
        });
        this.viewBottomForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            content: [
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_remarks") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "remarks"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_documenttotal") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/documentTotal"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_taxrate") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/taxRate"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_taxtotal") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/taxTotal"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_discount") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/discount"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_discounttotal") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/discountTotal"
                }),
            ]
        });
        this.tablePurchaseReturnItem = new sap.m.List("", {
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

        that.tablePurchaseReturnItem.bindItems({
            path: "/rows",
            template: ibas.IList_child_customer,
        });
        this.layoutMain = new sap.ui.layout.VerticalLayout("", {
            content: [
                this.viewTopForm,
                this.tablePurchaseReturnItem,
                this.viewBottomForm,
            ]
        });
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Bar("", {
                contentLeft: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_edit"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://edit",
                        press: function (): void {
                            that.fireViewEvents(that.editDataEvent);
                        }
                    })
                ],
                contentRight: [
                    new sap.m.Button("", {
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://action",
                        press: function (event: any): void {
                            that.fireViewEvents(that.callServicesEvent, {
                                displayServices(services: ibas.IServiceAgent[]): void {
                                    if (ibas.objects.isNull(services) || services.length === 0) {
                                        return;
                                    }
                                    let popover: sap.m.Popover = new sap.m.Popover("", {
                                        showHeader: false,
                                        placement: sap.m.PlacementType.Bottom,
                                    });
                                    for (let service of services) {
                                        popover.addContent(new sap.m.Button({
                                            text: ibas.i18n.prop(service.name),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: service.icon,
                                            press: function (): void {
                                                service.run();
                                                popover.close();
                                            }
                                        }));
                                    }
                                    (<any>popover).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                    popover.openBy(event.getSource(), true);
                                }
                            });
                        }
                    })
                ]
            }),
            content: [this.layoutMain]
        });
        this.id = this.page.getId();
        return this.page;
    }

    /** 改变视图状态 */
    private changeViewStatus(data: bo.PurchaseReturn): void {
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
    showPurchaseReturn(data: bo.PurchaseReturn): void {
        this.layoutMain.setModel(new sap.ui.model.json.JSONModel(data));
        this.layoutMain.bindObject("/");
    }
    /** 显示数据 */
    showPurchaseReturnItems(datas: bo.PurchaseReturnItem[]): void {
        this.tablePurchaseReturnItem.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
    }
}