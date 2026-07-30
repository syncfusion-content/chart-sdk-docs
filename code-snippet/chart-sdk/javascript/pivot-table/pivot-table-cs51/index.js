    ej.base.L10n.load({
        'ar-AE': {
            'pivotview': {
                'grandTotal': 'المجموع الكلى',
                'total': 'المجموع',
                'value': 'القيمة',
                'noValue': 'لا قيمة لها',
                'row': 'صف',
                'column': 'العمود',
                'collapse': 'الانهيار',
                'expand': 'توسيع'
            },
            'pivotfieldlist': {
                'fieldList': 'قائمة الحقول',
                'dropRowPrompt': 'تراجع الخلاف هنا',
                'dropColPrompt': 'انخفاض العمود هنا',
                'dropValPrompt': 'انخفاض قيمة هنا',
                'dropFilterPrompt': 'انخفاض هنا عامل التصفية',
                'addPrompt': 'اضافة حقل هنا',
                'adaptiveFieldHeader': 'اختر الحقل',
                'centerHeader': 'اسحب المجالات بين المناطق الموضحة ادناه:',
                'add': 'اضافة',
                'drag': 'اسحب',
                'filters': 'عوامل التصفية',
                'rows': 'الصفوف',
                'columns': 'الاعمدة',
                'values': 'قيم',
                'search': 'البحث',
                'close': 'قريب',
                'cancel': 'الغاء',
                'delete': 'احذف',
                'alert': 'حالة تاهب قصوى',
                'warning': 'تحذير',
                'ok': 'موافق',
                'allFields': 'جميع الحقول',
                'noMatches': 'لا مباريات'
            }
        }
    });
    ej.pivotview.PivotView.Inject(ej.pivotview.FieldList);
    var pivotTableObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            dataSource: pivotData,
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        },
        enableRtl: true,
        locale: 'ar-AE',
        showFieldList: true,
        height: 350
    });
    pivotTableObj.appendTo('#PivotTable');

