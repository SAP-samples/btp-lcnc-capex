{
	"contents": {
		"9b36dda2-cdbc-4552-bc3b-a5a3e78d08ae": {
			"classDefinition": "com.sap.bpm.wfs.Model",
			"id": "capexapprovals",
			"subject": "CapexApprovals",
			"name": "CapexApprovals",
			"documentation": "CapexApprovals",
			"lastIds": "62d7f4ed-4063-4c44-af8b-39050bd44926",
			"events": {
				"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
					"name": "StartEvent1"
				},
				"2798f4e7-bc42-4fad-a248-159095a2f40a": {
					"name": "EndEvent1"
				}
			},
			"activities": {
				"c730e320-3c77-4aa5-add3-02fef3267054": {
					"name": "UserTask1"
				}
			},
			"sequenceFlows": {
				"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
					"name": "SequenceFlow1"
				},
				"76e3f192-ba85-4e08-a168-8faa917d8189": {
					"name": "SequenceFlow2"
				}
			},
			"diagrams": {
				"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {}
			},
			"dataTypes": "34afc209-faa6-46ab-95b6-7ebd8ac615d3",
			"dataObjects": {
				"02f28669-3c23-4be0-b363-8ef1f99cce6e": {
					"name": "capexStart"
				}
			}
		},
		"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
			"classDefinition": "com.sap.bpm.wfs.StartEvent",
			"id": "startevent1",
			"name": "StartEvent1"
		},
		"2798f4e7-bc42-4fad-a248-159095a2f40a": {
			"classDefinition": "com.sap.bpm.wfs.EndEvent",
			"id": "endevent1",
			"name": "EndEvent1"
		},
		"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow1",
			"name": "SequenceFlow1",
			"sourceRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3",
			"targetRef": "c730e320-3c77-4aa5-add3-02fef3267054"
		},
		"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {
			"classDefinition": "com.sap.bpm.wfs.ui.Diagram",
			"symbols": {
				"df898b52-91e1-4778-baad-2ad9a261d30e": {},
				"53e54950-7757-4161-82c9-afa7e86cff2c": {},
				"6bb141da-d485-4317-93b8-e17711df4c32": {},
				"233a3606-5d01-4399-9c74-075c60978896": {},
				"c7501589-4ba7-4676-998f-f6ab6deed6ad": {}
			}
		},
		"df898b52-91e1-4778-baad-2ad9a261d30e": {
			"classDefinition": "com.sap.bpm.wfs.ui.StartEventSymbol",
			"x": 100,
			"y": 100,
			"width": 32,
			"height": 32,
			"object": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"53e54950-7757-4161-82c9-afa7e86cff2c": {
			"classDefinition": "com.sap.bpm.wfs.ui.EndEventSymbol",
			"x": 340,
			"y": 100,
			"width": 35,
			"height": 35,
			"object": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"6bb141da-d485-4317-93b8-e17711df4c32": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "116,117 219,117",
			"sourceSymbol": "df898b52-91e1-4778-baad-2ad9a261d30e",
			"targetSymbol": "233a3606-5d01-4399-9c74-075c60978896",
			"object": "c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f"
		},
		"62d7f4ed-4063-4c44-af8b-39050bd44926": {
			"classDefinition": "com.sap.bpm.wfs.LastIDs",
			"sequenceflow": 2,
			"startevent": 1,
			"endevent": 1,
			"usertask": 1
		},
		"34afc209-faa6-46ab-95b6-7ebd8ac615d3": {
			"classDefinition": "com.sap.bpm.wfs.Schemas",
			"schemas": {
				"_EDMTypes.json": {
					"origin": "predefined://EDMTypes",
					"version": "1.0.0",
					"content": {
						"$schema": "http://json-schema.org/draft-07/schema#",
						"definitions": {
							"Guid": {
								"type": "string",
								"pattern": "^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$"
							},
							"Int32": {
								"type": "integer",
								"minimum": -2147483648,
								"maximum": 2147483647
							},
							"Int64": {
								"type": "integer",
								"minimum": -9223372036854776000,
								"maximum": 9223372036854776000
							},
							"Decimal": {
								"type": "number"
							},
							"Binary": {
								"type": "string",
								"pattern": "^(?:[A-Za-z0-9-_]{4})*(?:[A-Za-z0-9-_]{2}|[A-Za-z0-9+/]{3})?$"
							},
							"DateTimeOffset": {
								"type": "string",
								"format": "date-time"
							},
							"TimeOfDay": {
								"type": "string",
								"pattern": "^(20|21|22|23|[0-1][0-9]):[0-5][0-9]:[0-5][0-9](.\\d+)?([zZ]|([+-](20|21|22|23|[0-1][0-9]):[0-5][0-9]))?$"
							},
							"Date": {
								"type": "string",
								"format": "date"
							},
							"Double": {
								"anyOf": [{
									"type": "number",
									"minimum": -1.7976931348623157e+308,
									"maximum": 1.7976931348623157e+308
								}, {
									"type": "string",
									"enum": ["-INF", "INF", "NaN"]
								}]
							},
							"Single": {
								"anyOf": [{
									"type": "number",
									"minimum": -3.402823e+38,
									"maximum": 3.402823e+38
								}, {
									"type": "string",
									"enum": ["-INF", "INF", "NaN"]
								}],
								"format": "decimal"
							},
							"Byte": {
								"type": "integer",
								"minimum": 0,
								"maximum": 255
							},
							"Int16": {
								"type": "integer",
								"minimum": -32768,
								"maximum": 32767
							},
							"SByte": {
								"type": "integer",
								"minimum": -128,
								"maximum": 127
							},
							"Any": {
								"anyOf": [{
									"type": "string"
								}, {
									"type": "object"
								}, {
									"type": "array"
								}, {
									"type": "integer"
								}, {
									"type": "number"
								}, {
									"type": "boolean"
								}, {
									"type": "null"
								}]
							}
						}
					}
				},
				"MainOnlineService.json": {
					"origin": "lcap://srv/service.cds",
					"selectedTypes": ["Capex"],
					"content": {
						"$schema": "http://json-schema.org/draft-07/schema#",
						"definitions": {
							"Capex": {
								"properties": {
									"createdAt": {
										"anyOf": [{
											"$ref": "_EDMTypes.json#/definitions/DateTimeOffset"
										}, {
											"type": "null"
										}]
									},
									"createdBy": {
										"anyOf": [{
											"type": "string",
											"maxLength": 255
										}, {
											"type": "null"
										}]
									},
									"modifiedAt": {
										"anyOf": [{
											"$ref": "_EDMTypes.json#/definitions/DateTimeOffset"
										}, {
											"type": "null"
										}]
									},
									"modifiedBy": {
										"anyOf": [{
											"type": "string",
											"maxLength": 255
										}, {
											"type": "null"
										}]
									},
									"ID": {
										"$ref": "_EDMTypes.json#/definitions/Guid"
									},
									"requestid": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"title": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"firstname": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"lastname": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"email": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"userid": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"comments": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"totalcost": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"type": {
										"anyOf": [{
											"$ref": "#/definitions/CapexType"
										}, {
											"type": "null"
										}]
									},
									"type_type": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"capex": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"opex": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"currency": {
										"anyOf": [{
											"$ref": "#/definitions/Currencies"
										}, {
											"type": "null"
										}]
									},
									"currency_code": {
										"anyOf": [{
											"type": "string",
											"maxLength": 3
										}, {
											"type": "null"
										}]
									},
									"roi": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"irr": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"country": {
										"anyOf": [{
											"$ref": "#/definitions/Countries"
										}, {
											"type": "null"
										}]
									},
									"country_code": {
										"anyOf": [{
											"type": "string",
											"maxLength": 3
										}, {
											"type": "null"
										}]
									},
									"business_unit": {
										"anyOf": [{
											"$ref": "#/definitions/BusinessUnits"
										}, {
											"type": "null"
										}]
									},
									"business_unit_business_unit": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"description": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"energy_efficiency": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"co2_efficiency": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"energy_cost_savings": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"water_savings": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									},
									"folder_id": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									}
								},
								"type": "object"
							},
							"CapexType": {
								"properties": {
									"createdAt": {
										"anyOf": [{
											"$ref": "_EDMTypes.json#/definitions/DateTimeOffset"
										}, {
											"type": "null"
										}]
									},
									"createdBy": {
										"anyOf": [{
											"type": "string",
											"maxLength": 255
										}, {
											"type": "null"
										}]
									},
									"modifiedAt": {
										"anyOf": [{
											"$ref": "_EDMTypes.json#/definitions/DateTimeOffset"
										}, {
											"type": "null"
										}]
									},
									"modifiedBy": {
										"anyOf": [{
											"type": "string",
											"maxLength": 255
										}, {
											"type": "null"
										}]
									},
									"type": {
										"type": "string"
									},
									"typedescription": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									}
								},
								"type": "object"
							},
							"Currencies": {
								"properties": {
									"name": {
										"anyOf": [{
											"type": "string",
											"maxLength": 255
										}, {
											"type": "null"
										}]
									},
									"descr": {
										"anyOf": [{
											"type": "string",
											"maxLength": 1000
										}, {
											"type": "null"
										}]
									},
									"code": {
										"type": "string",
										"maxLength": 3
									},
									"symbol": {
										"anyOf": [{
											"type": "string",
											"maxLength": 5
										}, {
											"type": "null"
										}]
									},
									"texts": {
										"anyOf": [{
											"type": "array",
											"items": {
												"$ref": "#/definitions/Currencies_texts"
											}
										}, {
											"type": "null"
										}]
									},
									"localized": {
										"anyOf": [{
											"$ref": "#/definitions/Currencies_texts"
										}, {
											"type": "null"
										}]
									}
								},
								"type": "object"
							},
							"Currencies_texts": {
								"properties": {
									"locale": {
										"type": "string",
										"maxLength": 14
									},
									"name": {
										"anyOf": [{
											"type": "string",
											"maxLength": 255
										}, {
											"type": "null"
										}]
									},
									"descr": {
										"anyOf": [{
											"type": "string",
											"maxLength": 1000
										}, {
											"type": "null"
										}]
									},
									"code": {
										"type": "string",
										"maxLength": 3
									}
								},
								"type": "object"
							},
							"Countries": {
								"properties": {
									"name": {
										"anyOf": [{
											"type": "string",
											"maxLength": 255
										}, {
											"type": "null"
										}]
									},
									"descr": {
										"anyOf": [{
											"type": "string",
											"maxLength": 1000
										}, {
											"type": "null"
										}]
									},
									"code": {
										"type": "string",
										"maxLength": 3
									},
									"texts": {
										"anyOf": [{
											"type": "array",
											"items": {
												"$ref": "#/definitions/Countries_texts"
											}
										}, {
											"type": "null"
										}]
									},
									"localized": {
										"anyOf": [{
											"$ref": "#/definitions/Countries_texts"
										}, {
											"type": "null"
										}]
									}
								},
								"type": "object"
							},
							"Countries_texts": {
								"properties": {
									"locale": {
										"type": "string",
										"maxLength": 14
									},
									"name": {
										"anyOf": [{
											"type": "string",
											"maxLength": 255
										}, {
											"type": "null"
										}]
									},
									"descr": {
										"anyOf": [{
											"type": "string",
											"maxLength": 1000
										}, {
											"type": "null"
										}]
									},
									"code": {
										"type": "string",
										"maxLength": 3
									}
								},
								"type": "object"
							},
							"BusinessUnits": {
								"properties": {
									"createdAt": {
										"anyOf": [{
											"$ref": "_EDMTypes.json#/definitions/DateTimeOffset"
										}, {
											"type": "null"
										}]
									},
									"createdBy": {
										"anyOf": [{
											"type": "string",
											"maxLength": 255
										}, {
											"type": "null"
										}]
									},
									"modifiedAt": {
										"anyOf": [{
											"$ref": "_EDMTypes.json#/definitions/DateTimeOffset"
										}, {
											"type": "null"
										}]
									},
									"modifiedBy": {
										"anyOf": [{
											"type": "string",
											"maxLength": 255
										}, {
											"type": "null"
										}]
									},
									"business_unit": {
										"type": "string"
									},
									"name": {
										"anyOf": [{
											"type": "string"
										}, {
											"type": "null"
										}]
									}
								},
								"type": "object"
							}
						}
					}
				}
			}
		},
		"02f28669-3c23-4be0-b363-8ef1f99cce6e": {
			"classDefinition": "com.sap.bpm.wfs.DataObject",
			"name": "capexStart",
			"type": {
				"schema": "MainOnlineService.json",
				"definition": "#/definitions/Capex"
			}
		},
		"c730e320-3c77-4aa5-add3-02fef3267054": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "New Capex Request",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"supportsForward": false,
			"userInterface": "sapui5://lcapcapex.CapexApprovalUI/CapexApprovalUI",
			"recipientUsers": "${info.startedBy}",
			"userInterfaceParams": [{
				"key": "capEntityKeyObject",
				"value": "${context.capEntityKeyObject}"
			}],
			"id": "usertask1",
			"name": "UserTask1"
		},
		"233a3606-5d01-4399-9c74-075c60978896": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 169,
			"y": 88,
			"width": 100,
			"height": 60,
			"object": "c730e320-3c77-4aa5-add3-02fef3267054"
		},
		"76e3f192-ba85-4e08-a168-8faa917d8189": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow2",
			"name": "SequenceFlow2",
			"sourceRef": "c730e320-3c77-4aa5-add3-02fef3267054",
			"targetRef": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"c7501589-4ba7-4676-998f-f6ab6deed6ad": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "219,117.75 357.5,117.75",
			"sourceSymbol": "233a3606-5d01-4399-9c74-075c60978896",
			"targetSymbol": "53e54950-7757-4161-82c9-afa7e86cff2c",
			"object": "76e3f192-ba85-4e08-a168-8faa917d8189"
		}
	}
}